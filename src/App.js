import Store from './component/Store/Store';
import MyNavbar from './component/MyNavbar';
import { Routes,Route } from 'react-router-dom';
import About from './component/About/About'
import Home from './component/Home/Home'
import ContactUS from './component/ContactUS/ContactUS';
import ProductDetails from './component/Store/ProductDetails/ProductDetails';
import LoginLogout from './component/LoginLogout/LoginLogout';
import { useContext} from 'react';
import CardProvider from './StoreContext/CardProvider'
import LoginContext from './component/LoginLogout/LoginContext';
function App() {
const logCtx=useContext(LoginContext);

  return (
    
     <CardProvider>
      <MyNavbar/>
      <Routes>
         <Route path='/' element={<Home/>}/>
         {logCtx.isLoggedIn && (<Route path='/store' element={<Store/>}/>)}
        <Route path='/store/ProductDetails' element={<ProductDetails/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contactus' element={<ContactUS/>}/>
        <Route path='/Login' element={<LoginLogout/>}/>
        <Route path='*' element={<Home/>} />
      </Routes>     
     </CardProvider>
  )
}

export default App;
