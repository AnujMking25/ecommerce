import classes from './MyNavbar.module.css'
import {Container, Navbar,Nav} from "react-bootstrap";
import React, { useContext, useState } from 'react'
import Cart from "./Cart/Cart";
import {NavLink  } from "react-router-dom";
import LoginContext from './LoginLogout/LoginContext'

 const MyNavbar = () => {

  const logCtx=useContext(LoginContext);
  const[show,setshow]=useState(false);
  const onShowHandler=()=>{
setshow(true);
  }
const onHideHandler=()=>{
  setshow(false)
}

  return (
    <Navbar bg="dark" variant="dark" className='p-1 ' > 
        <Container fluid className={classes.maindiv}>
            <Nav>
                <NavLink  to='/' >HOME</NavLink>
               {logCtx.isLoggedIn && <NavLink  to='/store' >STORE</NavLink>}
                <NavLink to='/about'>ABOUT</NavLink>
                <NavLink to='/contactus'>Contact Us</NavLink>
                <NavLink to='/login'>Login</NavLink>
            </Nav>
            {logCtx.isLoggedIn && <button onClick={onShowHandler}>CART</button>}
          
        </Container> 
        {show && <Cart onHide={onHideHandler}/>} 
    </Navbar>
  )
}
export default MyNavbar
