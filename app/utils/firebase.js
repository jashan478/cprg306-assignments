// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:"AIzaSyA54NhwkajfAaHfQdP7He9HXW4A8o1e6HU",
  authDomain:"cprg306-assignments-30802.firebaseapp.com",
  projectId:"cprg306-assignments-30802",
  storageBucket: "cprg306-assignments-30802.firebasestorage.app",
  messagingSenderId:"764408554227",
  appId:"1:764408554227:web:96f074a05e7895181fcd86",
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
