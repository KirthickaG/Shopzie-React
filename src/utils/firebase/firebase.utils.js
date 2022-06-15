import { initializeApp } from "firebase/app";
import {getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCsqQyKk6-ovK-gQlGhZ_B-nAwwjPdyOUU",
  authDomain: "shopzie-96098.firebaseapp.com",
  projectId: "shopzie-96098",
  storageBucket: "shopzie-96098.appspot.com",
  messagingSenderId: "911268309480",
  appId: "1:911268309480:web:a9d580799b6f0711585c5d"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider(); // class

provider.setCustomParameters(
    {prompt:"select_account"} // making user to select an account // default settings by google
);

export const auth = getAuth() // singleton // only one auth for entire app
export const signInWithGooglePopup = () => signInWithPopup(auth,provider) // the reason being this as (function) is 
// everytime this get called use the current auth and provider or else some stable value gets stored here all time during app
