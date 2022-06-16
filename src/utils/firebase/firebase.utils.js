import { initializeApp } from "firebase/app";
import {getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore, getDoc, setDoc, doc} from 'firebase/firestore'

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

export const signInwithGoogleRedirect = () => signInWithRedirect(auth,provider)

export const db = getFirestore();

export const createUserDocfromAuth = async (userAuth) => 
{
  const userDocRef = doc(db, 'users', userAuth.uid) // create or check for doc

  const userSnapshot = await getDoc(userDocRef) // get the doc snapshot

  if(!userSnapshot.exists()) // if not exists create one doc 
  {
    const {displayName, email} = userAuth
    const createdAt = new Date();
    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    }
    catch(err)
    {
      console.log("Error creating user",err.message);
    }
  }
  return userDocRef  // else return the existing doc
}
