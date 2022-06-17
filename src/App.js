import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './routes/home/home.component';
import Authentication from './routes/authentication/authentication.component';
import Navigation from './routes/navigation/navigation.component';
import Shop from './routes/shop/shop.component'
import Checkout from './components/checkout/checkout.component';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}></Route>
        {/* what this index tells this route is that when you match just this slash, so with nothing on it, then
        this should be the home component.That's what you render at the outlet level. */}
        <Route path='shop' element={<Shop/>}></Route>
        <Route path='auth' element={<Authentication/>}></Route>
        <Route path='checkout' element={<Checkout/>}></Route>
      </Route>
    </Routes>

  )
}

export default App;
