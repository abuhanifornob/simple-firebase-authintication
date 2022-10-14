// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD0IKYYT-qkmn6KoO9bR7XfZKhQtADd3Xw",
    authDomain: "simple-firebase-authinti-6dcf0.firebaseapp.com",
    projectId: "simple-firebase-authinti-6dcf0",
    storageBucket: "simple-firebase-authinti-6dcf0.appspot.com",
    messagingSenderId: "489739172050",
    appId: "1:489739172050:web:fafd0e4d0d65469bddd50b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app