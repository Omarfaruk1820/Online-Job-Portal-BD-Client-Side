// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXWQIrOzhQZlHxZd03tk_2_J7o1SkiiAc",
  authDomain: "private-job-portal.firebaseapp.com",
  projectId: "private-job-portal",
  storageBucket: "private-job-portal.firebasestorage.app",
  messagingSenderId: "183928153394",
  appId: "1:183928153394:web:04dbd708ffbff24fdf232b",
  measurementId: "G-TTM8YRMNSS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth
// const analytics = getAnalytics(app);