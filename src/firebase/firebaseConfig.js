import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_BD_API_KEY,
  authDomain: "bisbier-99b96.firebaseapp.com",
  projectId: "bisbier-99b96",
  storageBucket: "bisbier-99b96.appspot.com",
  messagingSenderId: "229673837467",
  appId: "1:229673837467:web:0ba90574296e17fd82b73e",
  measurementId: "G-D751Q3V8BZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);