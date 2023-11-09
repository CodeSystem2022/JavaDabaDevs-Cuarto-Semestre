// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAEtXbyC81F2zbDAVSCIOKROCdzsNRUWs8",
    authDomain: "fir-react-99243.firebaseapp.com",
    projectId: "fir-react-99243",
    storageBucket: "fir-react-99243.appspot.com",
    messagingSenderId: "677942905280",
    appId: "1:677942905280:web:e1d8d1c8e8e5e7cf7de025"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };