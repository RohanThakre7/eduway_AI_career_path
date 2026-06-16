import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  GoogleAuthProvider, 
  GithubAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';

// Firebase configuration for Eduway Web App
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "YOUR_API_KEY",
  authDomain: "eduway-a0b92.firebaseapp.com",
  projectId: "eduway-a0b92",
  storageBucket: "eduway-a0b92.firebasestorage.app",
  messagingSenderId: "964970158570",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:964970158570:web:YOUR_UNIQUE_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Authentication Providers
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();

// Re-export Auth Methods
export { signInWithPopup, signOut, onAuthStateChanged };
