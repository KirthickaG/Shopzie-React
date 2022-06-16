import SignIn from "../../components/signIn/sign-in.component"
import SignUp from "../../components/signUp/sign-up.component"

import './authentication.styles.css'

const Authentication = () =>
{   
    return(
        <div className="authentication-container">
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default Authentication;