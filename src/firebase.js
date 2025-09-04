// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDHzuEe1iteS0miu45TfKwvi_140GBdPDc",
  authDomain: "portfolio-ecfbe.firebaseapp.com",
  projectId: "portfolio-ecfbe",
  storageBucket: "portfolio-ecfbe.firebasestorage.app",
  messagingSenderId: "1075934481797",
  appId: "1:1075934481797:web:dfa2ff095fccf4553448ec",
  measurementId: "G-6TYRDFCH8H"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db, analytics };
