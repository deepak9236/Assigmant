// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAfAWba5GEtiU1EOow5q4b01Hz9BW7pV5c",
    authDomain: "inter-e6495.firebaseapp.com",
    projectId: "inter-e6495",
    storageBucket: "inter-e6495.firebasestorage.app",
    messagingSenderId: "980393198473",
    appId: "1:980393198473:web:6877f5a342644cb65d1758",
    measurementId: "G-W86NV9NN3E"
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
