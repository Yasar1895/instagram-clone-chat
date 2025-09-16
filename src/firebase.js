// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-6QPKOvsJEDLTHAteK533MAh8jRzOIqw",
  authDomain: "insta-e5d21.firebaseapp.com",
  databaseURL: "https://insta-e5d21-default-rtdb.firebaseio.com",
  projectId: "insta-e5d21",
  storageBucket: "insta-e5d21.appspot.com",
  messagingSenderId: "949687224519",
  appId: "1:949687224519:web:764e68a0c924cbca2916e2",
  measurementId: "G-D41QWMLMV3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;