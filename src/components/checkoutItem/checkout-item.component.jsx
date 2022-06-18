import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import './checkout-item.styles.scss'

const CheckoutItem = ({checkoutItem}) =>
{   
    const {addItemstoCart,removeItemsfromcart,removeItemfromCheckout} = useContext(CartContext)

    const incrementCart = (item) => addItemstoCart(item)
    const decrementCart = (item) => removeItemsfromcart(item)
    const removeEntireItem = (item) => removeItemfromCheckout(item)

    const {name,quantity,price,imageUrl} = checkoutItem;

    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <span className="arrow"  onClick={() => decrementCart(checkoutItem)}>&#10094;</span>
                <span className="value">{quantity}</span>
                <span className="arrow"  onClick={() => incrementCart(checkoutItem)}>&#10095;</span>
            </span>
            <span className="price">{`$${price}`}</span>
            <span className= "remove-button" onClick={() => removeEntireItem(checkoutItem)}>&#10005;</span>
        </div>
    )
}

export default CheckoutItem;