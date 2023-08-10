import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "react-admin-dashboard-8e923.firebaseapp.com",
  projectId: "react-admin-dashboard-8e923",
  storageBucket: "react-admin-dashboard-8e923.appspot.com",
  messagingSenderId: "877250096633",
  appId: "1:877250096633:web:70f29dc69a451a26fba128",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
