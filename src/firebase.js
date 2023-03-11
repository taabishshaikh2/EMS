// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsDsTyAAmXDjqQWvq-C9F3M0cDM1zh2hg",
  authDomain: "ems-react-855a0.firebaseapp.com",
  projectId: "ems-react-855a0",
  storageBucket: "ems-react-855a0.appspot.com",
  messagingSenderId: "631267984647",
  appId: "1:631267984647:web:9f334b2a4de2c4968a71a2",
  measurementId: "G-7RHCXYQ1D2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);