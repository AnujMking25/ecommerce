import React from 'react'
import { Container, Navbar} from "react-bootstrap";
const About = () => {
  return (
    <Navbar bg="dark" variant="dark" > 
    <Container>
        <Navbar.Brand  href="#">HOME</Navbar.Brand>
      <Navbar.Brand href="#">ABOUT</Navbar.Brand>
      <Navbar.Brand href="#">STORE</Navbar.Brand>
    </Container>
</Navbar>
  )
}
export default About;
