    import { CreateAction } from "../../utils/reducer/reducer.utils"
    import { USER_ACTION_TYPES } from "./user.types"
    export const setCurrentUser = (user) => {return CreateAction(USER_ACTION_TYPES.SET_CURRENT_USER,user)}
        // dispatch({type:USER_ACTION_TYPES.SET_CURRENT_USER, payload:user})
        