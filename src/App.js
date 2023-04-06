import './App.css';
import Store from './component/Store/Store';
import CardProvider from './StoreContext/CardProvider'
import MyNavbar from './component/MyNavbar';
import { Routes,Route } from 'react-router-dom';
import About from './About/About'
import Home from './Home/Home';
import ContactUS from './ContactUS/ContactUS';
function App() {
  return (
    <CardProvider>
      <MyNavbar/>
      <Routes>
        <Route path='/' element={<Store/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/contactus' element={<ContactUS/>}/>
      </Routes>
      
    </CardProvider>
     
     
  )
}

export default App;
