// Firebase Configuration (compat mode - no ES module imports needed)
// Firebase compat SDK is loaded via <script> tags in contact.html

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
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();