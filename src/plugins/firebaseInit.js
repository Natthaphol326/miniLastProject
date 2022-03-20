import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseApp = initializeApp({
  apiKey: "AIzaSyDbggCliaT74zT8DO6ot1XriHlCRPdLJpQ",
  authDomain: "miniproject-32f30.firebaseapp.com",
  projectId: "miniproject-32f30",
  storageBucket: "miniproject-32f30.appspot.com",
  messagingSenderId: "875071311008",
  appId: "1:875071311008:web:1c474480b143d0675e8dc5",
  measurementId: "G-D3EHR99411",
});

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
export { db, auth };
