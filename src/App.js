import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './routes/home/home.component';
import Authentication from './routes/authentication/authentication.component';
import Navigation from './routes/navigation/navigation.component';
import Shop from './routes/shop/shop.component'
import Checkout from './components/checkout/checkout.component';
import { useEffect } from "react";
import { onUserAuthChangedListener} from './utils/firebase/firebase.utils'
import {setCurrentUser} from './store/user/user.action'
import {useDispatch} from 'react-redux'

function App() {

   const dispatch = useDispatch();
  useEffect( () => {

      const unsubscribe = onUserAuthChangedListener((user) =>
      {
          // if(user){createUserDocfromAuth(user);} // this can be used done here to add user to firebase also
          // remove from sign-in where we create user collection, an user // cant do for sign-up tho we need displayname
          // i prefer to have it in sign in for better readability

          dispatch(setCurrentUser(user));
      })
      return unsubscribe;
  },[])

  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}></Route>
        {/* what this index tells this route is that when you match just this slash, so with nothing on it, then
        this should be the home component.That's what you render at the outlet level. */}
        <Route path='shop/*' element={<Shop/>}></Route>
        <Route path='auth' element={<Authentication/>}></Route>
        <Route path='checkout' element={<Checkout/>}></Route>
      </Route>
    </Routes>

  )
}

export default App;
