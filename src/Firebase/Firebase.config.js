// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDucbQOVrTpbdtzwPlK_IR8mfdMqHMGVA",
  authDomain: "food-lover-project.firebaseapp.com",
  projectId: "food-lover-project",
  storageBucket: "food-lover-project.appspot.com",
  messagingSenderId: "758666202696",
  appId: "1:758666202696:web:d1222fd9bb8bc4a420527d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;