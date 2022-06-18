import { useContext } from "react";

import CheckoutItem from "../checkoutItem/checkout-item.component";
import { CartContext } from "../../contexts/cart.context";

import './checkout.styles.scss'

const Checkout = () =>
{
    const {cartItems,cartPrice} = useContext(CartContext)

    return(
        <div className="checkout-container ">
            <h1> Let's Checkout </h1>
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
                {
                    cartItems.map(item => <CheckoutItem key={item.id} checkoutItem={item}/>)
                }
            <div className="total">Total:${cartPrice}</div>
        </div>
    )
}

export default Checkout;