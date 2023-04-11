import Store from './component/Store/Store';
// import CardProvider from './StoreContext/CardProvider'
import MyNavbar from './component/MyNavbar';
import { Routes,Route } from 'react-router-dom';
import About from './component/About/About'
import Home from './component/Home/Home'
import ContactUS from './component/ContactUS/ContactUS';
import ProductDetails from './component/Store/ProductDetails/ProductDetails';
import LoginLogout from './component/LoginLogout/LoginLogout';
import { useContext} from 'react';
import CartContext from './StoreContext/CartContext';

function App() {
const cartCtx=useContext(CartContext);
console.log("it is app.js", cartCtx.isLoggedIn);
  return (
    <>
     {/* <CardProvider> */}
      <MyNavbar/>
      <Routes>
         <Route path='/' element={<Home/>}/>
         {cartCtx.isLoggedIn && (<Route path='/store' element={<Store/>}/>)}
        <Route path='/store/ProductDetails' element={<ProductDetails/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contactus' element={<ContactUS/>}/>
        <Route path='/Login' element={<LoginLogout/>}/>
        <Route path='*' element={<Home/>} />
      </Routes>     
     {/* </CardProvider> */}
    </>
  )
}

export default App;
