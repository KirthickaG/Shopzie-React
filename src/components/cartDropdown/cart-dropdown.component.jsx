import { useContext } from 'react'

import Button from '../button/button.component'
import { CartItem } from '../cartItem/cart-item.component'
import { Link } from 'react-router-dom'
import { CartContext } from '../../contexts/cart.context'

import './cart-dropdown.styles.scss'

const CartDropdown = () =>
{
    const {cartItems} = useContext(CartContext)
    
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {
                  cartItems.map((item) => <CartItem key={item.id} cartItem={item}/>)
                }
            </div>
            <Link to="/checkout"><Button buttonType="inverted">Checkout</Button></Link>
        </div>
    )
}

export default CartDropdown;