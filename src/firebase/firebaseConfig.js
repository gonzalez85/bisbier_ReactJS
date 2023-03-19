import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = process.env.REACT_APP_BD_DATA;

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);