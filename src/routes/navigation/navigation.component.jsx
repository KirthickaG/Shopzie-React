import { Fragment } from 'react'
import { Outlet, Link} from 'react-router-dom'
import { signOutUser} from  '../../utils/firebase/firebase.utils'

import CartIcon from '../../components/cartIcon/cart-icon.component'
import CartDropdown from '../../components/cartDropdown/cart-dropdown.component'
// import { CartContext } from '../../contexts/cart.context'

import {ReactComponent as CrownLogo} from '../../assets/crown.svg'
import './navigation.styles.scss'

import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../store/user/user.selector'
import { selectIsCartOpen } from '../../store/cart/cart.selector'

const Navigation = () =>
{
  const currentUser = useSelector(selectCurrentUser)
  // const {currentUser} = useContext(UserContext);
  // const {isCartOpen} = useContext(CartContext);
  const isCartOpen = useSelector(selectIsCartOpen)

  const signOutHandler = async () =>  await signOutUser();

  return ( 
    <Fragment>
      <div className="navigation">
        <Link className='logo-container' to="/">
            <CrownLogo className='logo'/>
            <span>Shopzie</span>
        </Link>

        <div className='nav-links-container'>
            <Link className='nav-link' to="/shop">Shop</Link>
            {currentUser ? 
            <span className='nav-link' onClick={signOutHandler} >Sign Out </span> : 
            <Link className='nav-link' to="/auth">Sign In</Link>}
            <CartIcon/>
        </div>

        {isCartOpen && <CartDropdown/>}
            
      </div>      
      <Outlet/>
      <h3>Winci&#169; {new Date().getFullYear()}</h3>
    </Fragment>
  )
}

export default Navigation;