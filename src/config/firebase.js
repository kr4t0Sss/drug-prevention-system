import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBp6hmeTQldH-OGlYETTXc_i9lxh5r6Y1c",
  authDomain: "drug-use-prevention-system.firebaseapp.com",
  projectId: "drug-use-prevention-system",
  storageBucket: "drug-use-prevention-system.firebasestorage.app",
  messagingSenderId: "22666714467",
  appId: "1:22666714467:web:abe97bb5eeaee2b0018756"
};

console.log('🔥 Firebase config:', firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log('✅ Firebase app initialized successfully');

// Initialize Firebase services
const auth = getAuth(app);
console.log('✅ Firebase Auth initialized successfully');

const db = getFirestore(app);
console.log('✅ Firebase Firestore initialized successfully');

const googleProvider = new GoogleAuthProvider();

// Configure Google provider
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

console.log('✅ All Firebase services initialized successfully');

// Export all services
export { auth, db, googleProvider };
export default app; 