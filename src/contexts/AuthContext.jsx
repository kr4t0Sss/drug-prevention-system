import React, { createContext, useState, useContext, useEffect } from 'react';
import { auth } from '../config/firebase';
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
} from 'firebase/auth';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
        setUser(firebaseUser);
        setLoading(false);
        setError(null);
      }, (error) => {
        console.error('Firebase Auth Error:', error);
        setError(error.message);
        setLoading(false);
      });
      return () => unsubscribe();
    } catch (error) {
      console.error('Firebase initialization error:', error);
      setError('Firebase configuration error. Please check your environment variables.');
      setLoading(false);
    }
  }, []);

  // Đăng nhập bằng email và mật khẩu
  const login = async (email, password) => {
    try {
      setError(null);
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError(error.message);
      throw error;
    }
  };

  // Đăng ký tài khoản mới
  const register = async (email, password, name) => {
    try {
      setError(null);
      const result = await createUserWithEmailAndPassword(auth, email, password);
      if (name) {
        await updateProfile(result.user, { displayName: name });
      }
      return result;
    } catch (error) {
      setError(error.message);
      throw error;
    }
  };

  // Đăng xuất
  const logout = async () => {
    try {
      setError(null);
      await signOut(auth);
      setUser(null);
    } catch (error) {
      setError(error.message);
      throw error;
    }
  };

  // Gửi email đặt lại mật khẩu
  const resetPassword = async (email) => {
    try {
      setError(null);
      return await sendPasswordResetEmail(auth, email);
    } catch (error) {
      setError(error.message);
      throw error;
    }
  };

  // Nếu có lỗi Firebase, vẫn render children nhưng với mock functions
  if (error) {
    console.warn('Using mock auth due to Firebase error:', error);
    return (
      <AuthContext.Provider value={{ 
        user: null, 
        login: () => Promise.reject(new Error('Firebase not configured')),
        logout: () => Promise.resolve(),
        register: () => Promise.reject(new Error('Firebase not configured')),
        resetPassword: () => Promise.reject(new Error('Firebase not configured')),
        loading: false,
        error 
      }}>
        {children}
      </AuthContext.Provider>
    );
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, register, resetPassword, loading, error }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContext; 