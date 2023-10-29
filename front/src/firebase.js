// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-realstate-e121d.firebaseapp.com",
  projectId: "mern-realstate-e121d",
  storageBucket: "mern-realstate-e121d.appspot.com",
  messagingSenderId: "603636154020",
  appId: "1:603636154020:web:34ff1088cd55b63a707031"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);