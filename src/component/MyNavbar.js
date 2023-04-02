import { Button, Container, Navbar} from "react-bootstrap";
import React from 'react'

 const MyNavbar = () => {
  return (
    <>
    <Navbar bg="dark" variant="dark" > 
        <Container>
            <Navbar.Brand  href="#">HOME</Navbar.Brand>
          <Navbar.Brand href="#">ABOUT</Navbar.Brand>
          <Navbar.Brand href="#">STORE</Navbar.Brand>
         <Button  variant="outline-danger">CART</Button>
        </Container>
       
    </Navbar>
    </>
  )
}
export default MyNavbar
