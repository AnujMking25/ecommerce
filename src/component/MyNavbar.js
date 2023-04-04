import classes from './MyNavbar.module.css'
import { Button, Container, Navbar} from "react-bootstrap";
import React, { useState } from 'react'
import Cart from "../Cart/Cart";
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
    <>
    <Navbar bg="dark" variant="dark" style={{padding:'0.5px',marginBottom:'0.5px'}} > 
        <Container fluid>
            <div className={classes.navbardiv}>
                <NavLink to='./home' className={classes.navbarNavLink}>HOME</NavLink>
                <NavLink to='/' className={classes.navbarNavLink}>STORE</NavLink>
                <NavLink to='/about' className={classes.navbarNavLink}>ABOUT</NavLink>
            </div>
          <Button  variant="outline-danger"  onClick={onShowHandler}>CART</Button>
        </Container>  
    </Navbar>
    {show && <Cart onHide={onHideHandler}/>}
    </>
  )
}
export default MyNavbar
