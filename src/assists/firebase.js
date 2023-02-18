import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAEeE7eKH6vYwkBkgi4MoqBqw63IcVkXnY",
    authDomain: "clone-7ad5f.firebaseapp.com",
    projectId: "clone-7ad5f",
    storageBucket: "clone-7ad5f.appspot.com",
    messagingSenderId: "719252570345",
    appId: "1:719252570345:web:ca70dacb8bacb1dda73078",
    measurementId: "G-98FMEWBEQ5"
};

// Initializing app
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Initializing DB

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
