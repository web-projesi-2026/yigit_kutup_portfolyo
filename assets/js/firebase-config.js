// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC11aVGnLfCu6WWPWlaE5XkQ4PQY2O-WLE",
  authDomain: "portfolyoy.firebaseapp.com",
  projectId: "portfolyoy",
  storageBucket: "portfolyoy.firebasestorage.app",
  messagingSenderId: "47231265300",
  appId: "1:47231265300:web:e668d1083a30547e001501",
  measurementId: "G-B8QT0TM260"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);