// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD5WvrHJAiBOW_3Ql3GC-1JP0M7mcBkcbo",
    authDomain: "training-53.firebaseapp.com",
    projectId: "training-53",
    storageBucket: "training-53.appspot.com",
    messagingSenderId: "769013180028",
    appId: "1:769013180028:web:cf924d3b3e07e901818bf9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;