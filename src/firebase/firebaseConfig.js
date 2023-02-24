// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAElQBWc1FvrCH4fj1YiRkUNFHCtjQgfJw",
  authDomain: "bisbier-99b96.firebaseapp.com",
  projectId: "bisbier-99b96",
  storageBucket: "bisbier-99b96.appspot.com",
  messagingSenderId: "229673837467",
  appId: "1:229673837467:web:0ba90574296e17fd82b73e",
  measurementId: "G-D751Q3V8BZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore(app)