// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCec7HmZ1LVhQdIexcsBG4mxr7-NB6IdMQ",
  authDomain: "twitter-b5a72.firebaseapp.com",
  projectId: "twitter-b5a72",
  storageBucket: "twitter-b5a72.appspot.com",
  messagingSenderId: "902053524311",
  appId: "1:902053524311:web:bf530a73f150e2b24d4412",
  measurementId: "G-BB5LFSKFNL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
