import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD-6QPKOvsJEDLTHAteK533MAh8jRzOIqw",
  authDomain: "insta-e5d21.firebaseapp.com",
  projectId: "insta-e5d21",
  storageBucket: "insta-e5d21.appspot.com",
  messagingSenderId: "949687224519",
  appId: "1:949687224519:web:764e68a0c924cbca2916e2"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);