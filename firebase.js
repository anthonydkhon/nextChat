import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from 'firebase/app';


const firebaseConfig = {
  apiKey: "AIzaSyDUe7n25Ym88ly6XBEmJG8sQ7BFidpcLFw",
  authDomain: "whatsapp-2-382fb.firebaseapp.com",
  projectId: "whatsapp-2-382fb",
  storageBucket: "whatsapp-2-382fb.appspot.com",
  messagingSenderId: "897065432383",
  appId: "1:897065432383:web:7cde9246499fce4a350f8a",
};

const app = !firebase.app.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
