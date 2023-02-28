// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBXvcozdWXQLKTvQWxTK2boAQVi4uJ5iz4",
  authDomain: "sportlink-65c4d.firebaseapp.com",
  projectId: "sportlink-65c4d",
  storageBucket: "sportlink-65c4d.appspot.com",
  messagingSenderId: "208886005014",
  appId: "1:208886005014:web:e9a4e2140d03fa8632e437",
  measurementId: "G-F18PLZDX5Q"
};
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {app, db}