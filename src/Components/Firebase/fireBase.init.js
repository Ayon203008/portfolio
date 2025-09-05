// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCi3TIZ2spNcWMHCHcOq_L_oPi9CdOZOb4",
  authDomain: "portfolio-ayon-1eeb4.firebaseapp.com",
  projectId: "portfolio-ayon-1eeb4",
  storageBucket: "portfolio-ayon-1eeb4.firebasestorage.app",
  messagingSenderId: "389480508006",
  appId: "1:389480508006:web:82519947970d2a69949ba7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);