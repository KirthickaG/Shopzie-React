import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'

import {useDispatch, useSelector} from 'react-redux'

import { selectIsCartOpen } from '../../store/cart/cart.selector'
import { selectCartCount } from '../../store/cart/cart.selector'
import { setCartOpen } from '../../store/cart/cart.action'

const CartIcon = () =>
{
    // const {isCartOpen,setCartOpen} = useContext(CartContext);
    // const {cartCount} = useContext(CartContext);

    const dispatch = useDispatch();

    const isCartOpen = useSelector(selectIsCartOpen);
    const cartCount = useSelector(selectCartCount);

    const cartClickToogle = () => dispatch(setCartOpen(!isCartOpen));

    return(
        <div className='cart-icon-container' onClick={cartClickToogle}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIcon;