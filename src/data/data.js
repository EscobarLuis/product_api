import 'dotenv/config';

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyC7idVmwx27VM8MX5YnJQyTJOnPBqZzcmE",
    authDomain: "api-node-8778d.firebaseapp.com",
    projectId: "api-node-8778d",
    storageBucket: "api-node-8778d.firebasestorage.app",
    messagingSenderId: "1:998577915511:web:efaf980c67a09a332ee872",
    appId: "998577915511"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };