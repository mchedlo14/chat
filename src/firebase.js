// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyB9m0kQsA2aNS7tQci8-q2B9kmtu9_otJY",
  authDomain: "chatapp-5b2d2.firebaseapp.com",
  projectId: "chatapp-5b2d2",
  storageBucket: "chatapp-5b2d2.appspot.com",
  messagingSenderId: "534157047201",
  appId: "1:534157047201:web:daa3c653b5de925a7d87e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const db = getFirestore(app)