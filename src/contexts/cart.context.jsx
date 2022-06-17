import { useState,useEffect} from "react";
import { createContext } from "react";

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

export const CartProvider = ({children}) =>
{
    const [isCartOpen, setCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [cartPrice, setCartPrice] = useState(0)

    useEffect( () => 
    {
        const newCartCount = cartItems.reduce((total,item) => total+item.quantity ,0)
        const newCartPrice = cartItems.reduce((total,item) => total+(item.price * item.quantity), 0)

        setCartCount(newCartCount)
        setCartPrice(newCartPrice)

    },[cartItems])

    const addItemstoCart = (productToAdd) =>
    {
        setCartItems(updateAddCart(cartItems,productToAdd))
    }

    const removeItemsfromcart = (productToRemove) =>
    {
        setCartItems(updateRemoveCart(cartItems,productToRemove))
    }

    const removeItemfromCheckout = (itemToRemove) =>
    {
        setCartItems(updateRemoveCheckout(cartItems,itemToRemove))
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