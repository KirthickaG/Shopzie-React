import { createContext, useState, useEffect, useContext } from "react";
import { onUserAuthChangedListener} from '../utils/firebase/firebase.utils'

export const UserContext = createContext(
    {
        currentUser : null,
        setCurrentUser : () => null
    }
    
    
)

export const UserProvider = ({children}) =>
{
    
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser}

    useEffect( () => {
        const unsubscribe = onUserAuthChangedListener((user) =>
        {
            // if(user){createUserDocfromAuth(user);} // this can be used done here to add user to firebase also
            // remove from sign-in where we create user collection, an user // cant do for sign-up tho we need displayname
            // i prefer to have it in sign in for better readability

            setCurrentUser(user)
        })
        return unsubscribe;
    },[])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
