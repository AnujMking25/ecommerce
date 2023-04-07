import Store from './component/Store/Store';
import CardProvider from './StoreContext/CardProvider'
import MyNavbar from './component/MyNavbar';
import { Routes,Route } from 'react-router-dom';
import About from './component/About/About'
import Home from './component/Home/Home'
import ContactUS from './component/ContactUS/ContactUS';
import ProductDetails from './component/Store/ProductDetails/ProductDetails';

function App() {
  return (
    <CardProvider>
      <MyNavbar/>
      <Routes>
        <Route path='/store' element={<Store/>}/>
        <Route path='/store/ProductDetails/:ProductID' element={<ProductDetails/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/contactus' element={<ContactUS/>}/>
       
      </Routes>     
    </CardProvider>
  )
}

export default App;
