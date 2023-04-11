import classes from './MyNavbar.module.css'
import { Button, Container, Navbar} from "react-bootstrap";
import React, { useContext, useState } from 'react'
import Cart from "./Cart/Cart";
import {NavLink  } from "react-router-dom";
import CartContext from '../StoreContext/CartContext';

 const MyNavbar = () => {

  const cartCtx=useContext(CartContext);
  const[show,setshow]=useState(false);
  const onShowHandler=()=>{
setshow(true);
  }
const onHideHandler=()=>{
  setshow(false)
}

  return (
    <Navbar bg="dark" variant="dark" style={{padding:'0.5px',marginBottom:'0.5px'}} > 
        <Container fluid>
            <nav className={classes.navbardiv}>
                <NavLink active={classes.active} to='/' >HOME</NavLink>
               {cartCtx.isLoggedIn && <NavLink  to='/store' >STORE</NavLink>}
                <NavLink  to='/about'>ABOUT</NavLink>
                <NavLink  to='/contactus'>Contact Us</NavLink>
                <NavLink to='/login'>Login</NavLink>
            </nav>
          <Button  variant="outline-danger"  onClick={onShowHandler}>CART</Button>
        </Container> 
        {show && <Cart onHide={onHideHandler}/>} 
    </Navbar>
  )
}
export default MyNavbar
