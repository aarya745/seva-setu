import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC53Ipe8wHEBb_wevpU3HdZbetCGAH81LY",
  authDomain: "sevasetu-4b505.firebaseapp.com",
  projectId: "sevasetu-4b505",
  storageBucket: "sevasetu-4b505.firebasestorage.app",
  messagingSenderId: "296506378377",
  appId: "1:296506378377:web:7070312c0da7a85c705e58",
  measurementId: "G-J6JM1E99XS"
};
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export const auth = getAuth(app);