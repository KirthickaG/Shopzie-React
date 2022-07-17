import Button from '../button/button.component'
import { CartItem } from '../cartItem/cart-item.component'
import { Link } from 'react-router-dom'

import './cart-dropdown.styles.scss'

import { useSelector } from 'react-redux'

import { selectCartItems } from '../../store/cart/cart.selector'

const CartDropdown = () =>
{
    const cartItems = useSelector(selectCartItems)
    
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