import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Cấu hình Firebase của bạn
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);

// Khởi tạo Auth và Google Provider
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export default app; 