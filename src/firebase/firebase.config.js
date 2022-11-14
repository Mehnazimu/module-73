// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnRsa4UGGvuCqc97Ce1uWaq9eq6M5fF-E",
  authDomain: "simple-firebase-authenti-ecf7b.firebaseapp.com",
  projectId: "simple-firebase-authenti-ecf7b",
  storageBucket: "simple-firebase-authenti-ecf7b.appspot.com",
  messagingSenderId: "944808649455",
  appId: "1:944808649455:web:027e93012431e941a2311a"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

// apiKey: process.env.REACT_APP_apiKey,
// authDomain: process.env.REACT_APP_authDomain,
// projectId: process.env.REACT_APP_projectId,
// storageBucket: process.env.REACT_APP_storageBucket,
// messagingSenderId: process.env.REACT_APP_messagingSenderId,
// appId: process.env.REACT_APP_appId