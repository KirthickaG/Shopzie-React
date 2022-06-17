import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'

const CartIcon = () =>
{
    const {isCartOpen,setCartOpen} = useContext(CartContext);
    const {cartCount} = useContext(CartContext);
    const cartClickToogle = () => setCartOpen(!isCartOpen);

    return(
        <div className='cart-icon-container' onClick={cartClickToogle}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIcon;