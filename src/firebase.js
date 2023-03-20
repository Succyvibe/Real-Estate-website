// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use

import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmPt39bgLgxeZefqa8EzXLE-qE9C42F0w",
  authDomain: "real-estate-housing.firebaseapp.com",
  projectId: "real-estate-housing",
  storageBucket: "real-estate-housing.appspot.com",
  messagingSenderId: "211174873390",
  appId: "1:211174873390:web:ab9fb72577878209ef42bf",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
