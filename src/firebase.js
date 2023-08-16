import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBt5926KTKwTmeBJF6mECSMyR2gAmdeVMc",
  authDomain: "d-amazing-team.firebaseapp.com",
  projectId: "d-amazing-team",
  storageBucket: "d-amazing-team.appspot.com",
  messagingSenderId: "943031051100",
  appId: "1:943031051100:web:85f0b21825e7ed44d95799",
  measurementId: "G-21YR2YN579"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const storage = getStorage();

export { app, auth, storage };