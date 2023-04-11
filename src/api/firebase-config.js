// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  projectId: "fir-react-c8543",
  storageBucket: "fir-react-c8543.appspot.com",
  messagingSenderId: "149156762350",
  appId: "1:149156762350:web:3efeb3c3db376695c919ff",
  measurementId: "G-JSJ85GQM67",
};

const app = initializeApp(firebaseConfig);

export default app;
