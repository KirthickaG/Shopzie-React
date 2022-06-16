import { useState } from "react"
import { 
    createAuthUserWithEmailAndPassword, 
    createUserDocfromAuth} from  '../../utils/firebase/firebase.utils'

import Button from "../button/button.component"
import FormInput from "../formInput/form-input.component"

import './sign-up.styles.scss'

const defaultFormFields = {
    displayName : '',
    email: '',
    password: '',
    confirmpassword: ''
}

const SignUp = () =>
{
    const [formFields, setFormFields] = useState(defaultFormFields)
    const {displayName, email, password, confirmpassword} = formFields

    const resetFormFields =() =>
    {
        setFormFields(defaultFormFields)
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

        if(password !== confirmpassword)
        {
            alert("password do not match")
            return;
        }

        try{
            const {user} = await createAuthUserWithEmailAndPassword(email,password)
            await createUserDocfromAuth(user, {displayName});
            resetFormFields();
        }
        catch(error)
        {
            if(error.code === 'auth/email-already-in-use')
            {
                alert("cannot create")
            }
            console.log("Error creating user",error.message)
        }
    }

    return(
        <div className="sign-up-container">
            <h2>Dont have an account</h2>
            <span> Sign Up with email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                label="DisplayName" 
                type="text" 
                name="displayName" 
                value={displayName} 
                onChange={handleChange} required/>

                <FormInput 
                label="Email" 
                type="email" 
                name="email" 
                value={email} 
                onChange={handleChange} required/>

                <FormInput 
                label="Password" 
                type="password"  
                name="password" 
                value={password} 
                onChange={handleChange} required/>

                <FormInput 
                label="Confirm Password" 
                type="password"  
                name="confirmpassword" 
                value={confirmpassword} 
                onChange={handleChange} required/>

                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUp;