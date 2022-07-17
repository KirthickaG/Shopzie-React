    import { CreateAction } from "../../utils/reducer/reducer.utils"
    import { CART_ACTION_TYPES } from "./cart.types"

    const updateAddCart = (cartItems, productToAdd) =>
{   
    // find if cartItems contain producttoAdd
    const existingItem = cartItems.find((item) => item.id === productToAdd.id)

    // if exist increase quantity
    if(existingItem)
    {
       return cartItems.map((item) => item.id === productToAdd.id ?
        {...item, quantity: item.quantity+1}
        : item
    )}

    // if not exist    
    return [...cartItems, {...productToAdd, quantity:1}]

}

const updateRemoveCart = (cartItems, productToRemove) => 
{
    const existingItem = cartItems.find(item => item.id === productToRemove.id)

    if(existingItem.quantity === 1)
    {
       return cartItems.filter(item => item.id !== productToRemove.id)
    }

    return cartItems.map(item => (item.id === productToRemove.id) ?
            ({...item, quantity: item.quantity-1}) : item )
}

 const updateRemoveCheckout = (cartItems, itemToRemove) =>
 {
    const existingItem = cartItems.find(item => item.id === itemToRemove.id)

    if(existingItem)
    {
         return cartItems.filter(item => item.id !== itemToRemove.id)
    }
 }

export const setCartOpen = (bool) => 
{
    return CreateAction(CART_ACTION_TYPES.SET_CART_OPEN, bool)
    // dispatch({type:USER_ACTION_TYPES.SET_CURRENT_USER, payload:user})
}      

export const addItemstoCart = (cartItems,productToAdd) =>
{
    const newCartItems = updateAddCart(cartItems,productToAdd)
    // updateCartItemsReducer(newCartItems)
    return CreateAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems)
}

export const removeItemsfromcart = (cartItems,productToRemove) =>
{
    const newCartItems = updateRemoveCart(cartItems,productToRemove)
    // updateCartItemsReducer(newCartItems)
    return CreateAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems)
}

export const removeItemfromCheckout = (cartItems,itemToRemove) =>
{
    const newCartItems = updateRemoveCheckout(cartItems,itemToRemove)
    // updateCartItemsReducer(newCartItems)
    return CreateAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems)
}