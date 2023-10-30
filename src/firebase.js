// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIR8eGJIjaXcC6v5ZHv417cv0_96sZ-Vo",
  authDomain: "todolist-react-7694a.firebaseapp.com",
  projectId: "todolist-react-7694a",
  storageBucket: "todolist-react-7694a.appspot.com",
  messagingSenderId: "219900379536",
  appId: "1:219900379536:web:6dda230bfc72fdc82cf315",
  measurementId: "G-X7LK4C5SS3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);