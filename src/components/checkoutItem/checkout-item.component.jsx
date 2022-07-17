import './checkout-item.styles.scss'

import { useDispatch, useSelector } from "react-redux"
import { selectCartItems } from "../../store/cart/cart.selector"
import { addItemstoCart,removeItemfromCheckout,removeItemsfromcart } from "../../store/cart/cart.action"

const CheckoutItem = ({checkoutItem}) =>
{   
    const {name,quantity,price,imageUrl} = checkoutItem;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const incrementCart = () => dispatch(addItemstoCart(cartItems,checkoutItem))
    const decrementCart = () => dispatch(removeItemsfromcart(cartItems,checkoutItem))
    const removeEntireItem = () => dispatch(removeItemfromCheckout(cartItems,checkoutItem))

    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <span className="arrow"  onClick={() => decrementCart()}>&#10094;</span>
                <span className="value">{quantity}</span>
                <span className="arrow"  onClick={() => incrementCart()}>&#10095;</span>
            </span>
             <span className="price">{`$${price}`}</span>
            <span className= "remove-button" onClick={() => removeEntireItem()}>&#10005;</span>
        </div>
    )
}

export default CheckoutItem;