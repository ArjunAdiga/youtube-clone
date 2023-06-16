import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBX3ZOGTfjVsKflivN183S0ckjM8Uh-JIo",
  authDomain: "clone-ae32d.firebaseapp.com",
  projectId: "clone-ae32d",
  storageBucket: "clone-ae32d.appspot.com",
  messagingSenderId: "157057858109",
  appId: "1:157057858109:web:dfb7dd2157a1929f40c854",
  measurementId: "G-FTW41KRVCT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider = new GoogleAuthProvider()
export {auth,provider}