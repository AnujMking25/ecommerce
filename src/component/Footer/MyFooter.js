import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import imgpath from "../../Asset/YouTube.jpg";
import classes from './MyFooter.module.css';
const MyFooter = () => {
  return (
    <div className={classes.maindiv}>
      <Container fluid>
        <Row className="w-100">
          <Col sm={8}><h1>My Shoping Portal</h1>
          </Col>
          <Col sm={4}>
            <a href="https://www.youtube.com/">
              <Image src={imgpath} alt="YouTube "/>
            </a>

            <a href="https://www.youtube.com/">
              <Image src={imgpath} alt="YouTube "/>
            </a>
            <a href="https://www.youtube.com/">
              <Image src={imgpath} alt="YouTube "/>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyFooter;
