// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC53Ipe8wHEBb_wevpU3HdZbetCGAH81LY",
  authDomain: "sevasetu-4b505.firebaseapp.com",
  projectId: "sevasetu-4b505",
  storageBucket: "sevasetu-4b505.firebasestorage.app",
  messagingSenderId: "296506378377",
  appId: "1:296506378377:web:7070312c0da7a85c705e58",
  measurementId: "G-J6JM1E99XS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);