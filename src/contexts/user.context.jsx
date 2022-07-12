import { createContext, useEffect, useReducer } from "react";
import { onUserAuthChangedListener} from '../utils/firebase/firebase.utils'

import { CreateAction } from "../utils/reducer/reducer.utils";
export const UserContext = createContext(
    {
        currentUser : null,
        setCurrentUser : () => null
    }  
)

const USER_ACTION_TYPES = 
{
    SET_CURRENT_USER : 'SET_CURRENT_USER'
}

const INITIAL_STATE  = 
{
    currentUser : null
}

const userReducer = (state,action) =>
{
    const {type,payload} = action
        switch(type)
        {
            case USER_ACTION_TYPES.SET_CURRENT_USER :
                return{
                    ...state,
                    currentUser:payload
                };
            default:
                throw new Error(`unhandled ${type} in userReducer`);
        }
}


export const UserProvider = ({children}) =>
{
    
    // const [currentUser, setCurrentUser] = useState(null);

    const [{currentUser},dispatch] = useReducer(userReducer, INITIAL_STATE)    

    const setCurrentUser = (user) =>
    {
        // dispatch({type:USER_ACTION_TYPES.SET_CURRENT_USER, payload:user})
        dispatch(CreateAction(USER_ACTION_TYPES.SET_CURRENT_USER,user))
    }

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
