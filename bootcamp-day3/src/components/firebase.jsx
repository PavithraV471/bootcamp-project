
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDLl-irFOqm6-xjaJCHW-8EzvT2yBq8kDE",
    authDomain: "do-app-16bd9.firebaseapp.com",
    projectId: "do-app-16bd9",
    storageBucket: "do-app-16bd9.appspot.com",
    messagingSenderId: "934346931693",
    appId: "1:934346931693:web:c31f9a57578b06dbf6fbe4"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth()
const provider=new GoogleAuthProvider()

const db=getFirestore(app)
export {auth, provider,db}