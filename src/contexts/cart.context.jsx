import { useReducer} from "react";
import { createContext } from "react";

import { CreateAction } from "../utils/reducer/reducer.utils";

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


export const CartContext = createContext(
    {
        isCartOpen : false,
        setCartOpen : () => {},
        cartItems : [],
        addItemstoCart : () => {},
        removeItemsfromcart : () => {},
        removeItemfromCheckout : () => {},
        cartCount : 0,
        cartPrice : 0,
    }
)

const CART_ACTION_TYPES =
{
    SET_CART_ITEMS : 'SET_CART_ITEMS',
    SET_CART_OPEN : 'SET_CART_OPEN'
}

const INITIAL_STATE = 
{
    isCartOpen: true,
    cartItems: [],
    cartCount:0,
    cartPrice:0
};

const cartReducer = (state,action) =>
{
    const {type,payload} = action

    switch(type)
    {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return{
                ...state,...payload
            }
        case CART_ACTION_TYPES.SET_CART_OPEN:
        return{
            ...state,isCartOpen:payload
        }
        default:
            throw new Error("no type found")
    }
}



export const CartProvider = ({children}) =>
{
    // const [isCartOpen, setCartOpen] = useState(false)
    // const [cartItems, setCartItems] = useState([])
    // const [cartCount, setCartCount] = useState(0)
    // const [cartPrice, setCartPrice] = useState(0)

    const [{isCartOpen,cartItems,cartCount,cartPrice},dispatch] = useReducer(cartReducer, INITIAL_STATE)    

    const updateCartItemsReducer = (newCartItems) =>
    {
        const newCartCount = newCartItems.reduce((total,item) => total+item.quantity ,0)
        const newCartPrice = newCartItems.reduce((total,item) => total+(item.price * item.quantity), 0)

        // dispatch({
        //     type:CART_ACTION_TYPES.SET_CART_ITEMS, 
        //     payload:{
        //         cartItems:newCartItems, 
        //         cartCount:newCartCount, 
        //         cartPrice:newCartPrice}})

        dispatch(CreateAction(CART_ACTION_TYPES.SET_CART_ITEMS,{
                cartItems:newCartItems, 
                cartCount:newCartCount, 
                cartPrice:newCartPrice}))
            
    }

    const addItemstoCart = (productToAdd) =>
    {
        const newCartItems = updateAddCart(cartItems,productToAdd)
        updateCartItemsReducer(newCartItems)
    }

    const removeItemsfromcart = (productToRemove) =>
    {
        const newCartItems = updateRemoveCart(cartItems,productToRemove)
        updateCartItemsReducer(newCartItems)
    }

    const removeItemfromCheckout = (itemToRemove) =>
    {
        const newCartItems = updateRemoveCheckout(cartItems,itemToRemove)
        updateCartItemsReducer(newCartItems)
    }

     const setCartOpen = (bool) =>
     {
        // dispatch({type:CART_ACTION_TYPES.SET_CART_OPEN, payload:bool})
        dispatch(CreateAction(CART_ACTION_TYPES.SET_CART_OPEN, bool))
    }

    const value = {
        isCartOpen,setCartOpen,
        cartItems,cartCount,cartPrice,
        addItemstoCart,removeItemsfromcart,removeItemfromCheckout
    }

    return <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
}