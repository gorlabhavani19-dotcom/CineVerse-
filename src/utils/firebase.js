// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAJmr6gS8z09D4vts-i9v5SUJrzeHaVzA",
  authDomain: "netflixgpt-2a0d3.firebaseapp.com",
  projectId: "netflixgpt-2a0d3",
  storageBucket: "netflixgpt-2a0d3.firebasestorage.app",
  messagingSenderId: "97137658642",
  appId: "1:97137658642:web:9e9812af18652994ee41cb",
  measurementId: "G-8LKCN0DF5P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();