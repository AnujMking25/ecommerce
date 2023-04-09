import classes from './MyNavbar.module.css'
import { Button, Container, Navbar} from "react-bootstrap";
import React, { useState } from 'react'
import Cart from "./Cart/Cart";
import {NavLink  } from "react-router-dom";

 const MyNavbar = () => {
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
                <NavLink active={classes.active} to='./' >HOME</NavLink>
                <NavLink  to='/store' >STORE</NavLink>
                <NavLink  activeClassName={classes.active} to='/about'>ABOUT</NavLink>
                <NavLink  activeClassName={classes.active} to='/contactus'>Contact Us</NavLink>
                <NavLink to='/login'>Login</NavLink>
            </nav>
          <Button  variant="outline-danger"  onClick={onShowHandler}>CART</Button>
        </Container> 
        {show && <Cart onHide={onHideHandler}/>} 
    </Navbar>
  )
}
export default MyNavbar
