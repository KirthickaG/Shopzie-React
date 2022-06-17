import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'
import { CartContext } from '../../contexts/cart.context'
import { useContext } from 'react'

const CartIcon = () =>
{
    const {isCartOpen,setCartOpen} = useContext(CartContext);
    const cartClickToogle = () =>
    {
        setCartOpen(!isCartOpen);
    }

    return(
        <div className='cart-icon-container' onClick={cartClickToogle}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartIcon;