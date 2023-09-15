// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBU9FjX6PUQyw0XbF7Xe_mRrJOo_F9xPkI",
  authDomain: "twitterclone-2002.firebaseapp.com",
  projectId: "twitterclone-2002",
  storageBucket: "twitterclone-2002.appspot.com",
  messagingSenderId: "724418392163",
  appId: "1:724418392163:web:27811f7b9a941e47f4c856",
  measurementId: "G-9RBDSWWH5B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();