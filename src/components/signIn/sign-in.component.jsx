import { useState, useContext } from "react"

import { 
    signInWithGooglePopup, 
    createUserDocfromAuth,
    signInAuthUserWithEmailAndPassword
} from '../../utils/firebase/firebase.utils'

import Button from "../button/button.component"
import FormInput from "../formInput/form-input.component"

import './sign-in.styles.scss'
import { UserContext } from "../../contexts/user.context"

const defaultFormFields = {
    email: '',
    password: '',
}

const SignIn = () =>
{
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password} = formFields

    const {setCurrentUser} = useContext(UserContext)

    const resetFormFields = () =>
    {
        setFormFields(defaultFormFields)
    }

    const signInUsingGoogle = async () =>
    {
        const {user} = await signInWithGooglePopup();
        await createUserDocfromAuth(user);
        setCurrentUser(user);
    }

    const handleChange = (event) =>
    {
        const {name, value} = event.target;

        setFormFields(
        {
            ...formFields,
            [name]:value
        })
    }

    const handleSubmit = async (event) =>
    {
        event.preventDefault();
        try{
            resetFormFields();
            const {user} = await signInAuthUserWithEmailAndPassword(email,password)
            setCurrentUser(user);
        }
        catch(error)
        {
            switch(error.code)
            {
                case 'auth/wrong-password' : 
                    alert('Incorrect password') 
                    break;
                case 'auth/user-not-found' :
                    alert('User not found')
                    break;
                default:
                    console.log(error,error.message)

            }
        }
    }

    return(
        <div className="sign-in-container">
            <h2>Already have an account</h2>
            <span> Sign In with email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                label="Email" 
                type="email" 
                name="email" 
                value={email} 
                onChange={handleChange} />

                <FormInput 
                label="Password" 
                type="password"  
                name="password" 
                value={password} 
                onChange={handleChange} />
                
                <div className="buttons-container">
                    <Button type="submit">
                        Sign In
                    </Button>
                    <Button type="button" onClick={signInUsingGoogle} buttonType='google'>
                       Google Sign In 
                    </Button>
                </div>                
            </form>            
        </div>
    )
}

export default SignIn;