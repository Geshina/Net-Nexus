// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8xQp5364skykAWXL6s13hY1sZmwMF-rA",
  authDomain: "net-nexus.firebaseapp.com",
  projectId: "net-nexus",
  storageBucket: "net-nexus.appspot.com",
  messagingSenderId: "892818774276",
  appId: "1:892818774276:web:7e7d8ac3b1b04d0c155851",
  measurementId: "G-FL85QJ76C9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);