import React from "react";
import { Container,Row,Col , Button ,Image} from "react-bootstrap";

const MyFooter = () => {
  return (
    <div
      style={{
        height: "6rem",
        backgroundColor: "darkcyan",
        marginTop: "2.5rem",
        paddingTop: "2rem",
      }}
    >
      <Container >
        <Row style={{marginTop:'-1rem'}} >
            <Col> <h1
          style={{
            fontFamily: "-moz-initial",
            fontSize: "50px",
            fontWeight:'bold',
            color: "white",
            paddingLeft:'4rem',
            textAlign: "left",
            width:'30rem',
           
          }}
        >
          The Generics
        </h1></Col>
            <Col >
            <Button type="submit" ><Image src='../../Asset/YouTube.jpg' href="www.youtube.com"></Image></Button>
            <Button type="submit" style={{marginLeft:'3rem'}}><Image src='../../Asset/YouTube.jpg' href="www.youtube.com"></Image></Button>
            <Button type="submit" style={{marginLeft:'3rem'}}><Image src='../../Asset/YouTube.jpg' href="www.youtube.com"></Image></Button>
            </Col>
        </Row>
       
      </Container>
    </div>
  );
};

export default MyFooter;
