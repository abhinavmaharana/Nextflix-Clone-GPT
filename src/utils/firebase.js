// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBVMyfww67K_jjydoXmgjiwQW_ciW2Wz58",
  authDomain: "netflixgpt-374b3.firebaseapp.com",
  projectId: "netflixgpt-374b3",
  storageBucket: "netflixgpt-374b3.appspot.com",
  messagingSenderId: "698714656062",
  appId: "1:698714656062:web:c71cfcd7552843bdceb06f",
  measurementId: "G-JXNGBP6LDX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();