// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwa2E7jgrGcyySpX5Y8rtOh7cBsrjc8H8",
  authDomain: "journal-app-react-f7006.firebaseapp.com",
  projectId: "journal-app-react-f7006",
  storageBucket: "journal-app-react-f7006.firebasestorage.app",
  messagingSenderId: "427069658314",
  appId: "1:427069658314:web:d6c222caf35bf28e189033"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );