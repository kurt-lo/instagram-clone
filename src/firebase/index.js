import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAeg7h4rjz5_uPFS0u_Ifwogdc0o0FpyBE",
  authDomain: "instagram-clone-8305d.firebaseapp.com",
  projectId: "instagram-clone-8305d",
  storageBucket: "instagram-clone-8305d.appspot.com",
  messagingSenderId: "354495712098",
  appId: "1:354495712098:web:bfe51a3dec720b047d3a3b",
  measurementId: "G-63E2Q2919T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };