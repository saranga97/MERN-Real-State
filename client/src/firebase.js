// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-stack-realstate.firebaseapp.com",
  projectId: "mern-stack-realstate",
  storageBucket: "mern-stack-realstate.appspot.com",
  messagingSenderId: "864547824476",
  appId: "1:864547824476:web:de878e1615dd9ec8cc5799"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);