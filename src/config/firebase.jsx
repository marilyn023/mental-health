import { initializeApp } from "firebase/app"
import { collection, doc, setDoc, getFirestore } from "firebase/firestore"

import {
    getAuth,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail
} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCLxl7tEK6N7Qha97_wx6cX_samFAKOP7A",
    authDomain: "mental-health-980a0.firebaseapp.com",
    projectId: "mental-health-980a0",
    storageBucket: "mental-health-980a0.appspot.com",
    messagingSenderId: "936442381453",
    appId: "1:936442381453:web:d5de9985299297b80c0ec4",
    measurementId: "G-M6YF9G8CP9",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const firestore = getFirestore(app)
const firebaseAuth = getAuth(app)
export {
    collection,
    setDoc,
    firestore,
    firebaseAuth,
    doc,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail
}
