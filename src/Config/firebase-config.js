// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWE_tMzd4haGyPWM7D_4fISkC50s8XZO8",
  authDomain: "expense-tracker-925b9.firebaseapp.com",
  projectId: "expense-tracker-925b9",
  storageBucket: "expense-tracker-925b9.firebasestorage.app",
  messagingSenderId: "987462118174",
  appId: "1:987462118174:web:cbd2697801b8126f6c770f",
  measurementId: "G-YP8M87BV54",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
