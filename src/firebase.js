// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "apiKey",
    authDomain: "fir-authentication-a2bd0.firebaseapp.com",
    projectId: "fir-authentication-a2bd0",
    storageBucket: "fir-authentication-a2bd0.appspot.com",
    messagingSenderId: "62911664781",
    appId: "1:62911664781:web:6ba30311c11a1e148088c4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

