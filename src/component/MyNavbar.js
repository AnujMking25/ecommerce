import { Button, Container, Navbar} from "react-bootstrap";
import React, { useState } from 'react'
import Cart from "../Cart/Cart";


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
    <Navbar bg="dark" variant="dark" > 
        <Container>
            <Navbar.Brand  href="#">HOME</Navbar.Brand>
          <Navbar.Brand >ABOUT</Navbar.Brand>
          <Navbar.Brand >STORE</Navbar.Brand>
         <Button  variant="outline-danger" onClick={onShowHandler}>CART</Button>
         
        </Container>
       
    </Navbar>
    {show && <Cart onHide={onHideHandler}/>}
    </>
  )
}
export default MyNavbar
