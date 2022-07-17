    import { CreateAction } from "../../utils/reducer/reducer.utils"
    import { CATEGORY_ACTION_TYPES } from "./category.types"
    export const setProducts = (category) => {return CreateAction(CATEGORY_ACTION_TYPES.SET_CATEGORY,category)}
        // dispatch({type:USER_ACTION_TYPES.SET_CURRENT_USER, payload:user})
        