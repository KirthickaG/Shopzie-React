import { useState,useEffect} from "react";
import { createContext } from "react";

const updateCart = (cartItems, productToAdd) =>
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

export const CartContext = createContext(
    {
        isCartOpen : false,
        setCartOpen : () => {},
        cartItems : [],
        addItemstoCart : () => {},
        cartCount : 0
    }
)

export const CartProvider = ({children}) =>
{
    const [isCartOpen, setCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)

    useEffect( () => 
    {
        const newCartCount = cartItems.reduce((total,item) => total+item.quantity ,0)
        setCartCount(newCartCount)

    },[cartItems])

    const addItemstoCart = (productToAdd) =>
    {
        setCartItems(updateCart(cartItems,productToAdd))
        // console.log(productToAdd)
    }

    const value = {isCartOpen,setCartOpen,cartItems,addItemstoCart,cartCount}

    return <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
}