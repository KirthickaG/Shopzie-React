import {
    auth, 
    signInWithGooglePopup, 
    signInwithGoogleRedirect, 
    createUserDocfromAuth} 
    from  '../../utils/firebase/firebase.utils'

import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

const SignIn = () =>
{
    useEffect(() => 
    {
        const getSignIn = async () =>
        {
            const response = await getRedirectResult(auth)
            if(response)
            {
                 const userDocRef = await createUserDocfromAuth(response.user);   
            }
        }
        getSignIn();
        
    },[]);
    

    const logGoogleUser = async() =>
    {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocfromAuth(user);   
    }

    const logGoogleUserRedirect = async() =>
    {
        const {user} = await signInwithGoogleRedirect();
        console.log(user)
        // const userDocRef = await createUserDocfromAuth(user);
    }
   
    return(
        <div>
            <h1> Sign In Page</h1>
            <button onClick={logGoogleUser}>
                Sign In Google
            </button>
            <button onClick={logGoogleUserRedirect}>
                Sign In Redirect
            </button>
        </div>
    )
}

export default SignIn