import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBL3XoqC4lPTSEqzhN586PdI0z4rBAwWM0",
  authDomain: "ecomerceborras.firebaseapp.com",
  projectId: "ecomerceborras",
  storageBucket: "ecomerceborras.firebasestorage.app",
  messagingSenderId: "491773661501",
  appId: "1:491773661501:web:53433439d3bcfbfca77554",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
