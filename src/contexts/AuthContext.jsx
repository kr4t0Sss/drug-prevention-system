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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Đăng nhập bằng email và mật khẩu
  const login = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Đăng ký tài khoản mới
  const register = async (email, password, name) => {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    if (name) {
      await updateProfile(result.user, { displayName: name });
    }
    return result;
  };

  // Đăng xuất
  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  // Gửi email đặt lại mật khẩu
  const resetPassword = async (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register, resetPassword, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContext; 