import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import imgpath from "../../Asset/YouTube.jpg";

const MyFooter = () => {
  return (
    <div
      style={{
        height: "6rem",
        backgroundColor: "#56CCF2",
        marginTop: "2.5rem",
        paddingTop: "2rem",
      }}
    >
      <Container>
        <Row style={{ marginTop: "-1rem" }}>
          <Col>
            {" "}
            <h1
              style={{
                fontFamily: "-moz-initial",
                fontSize: "50px",
                fontWeight: "bold",
                color: "white",
                paddingLeft: "4rem",
                textAlign: "left",
                width: "30rem",
              }}
            >
              The Generics
            </h1>
          </Col>
          <Col>
            <a href="https://www.youtube.com/">
              <Image src={imgpath} style={{ height: "30px", margin: "0px" }} />
            </a>

            <a href="https://www.youtube.com/">
              <Image
                src={imgpath}
                style={{ height: "30px", marginLeft: "3rem" }}
              />
            </a>
            <a href="https://www.youtube.com/">
              <Image
                src={imgpath}
                style={{ height: "30px", marginLeft: "3rem" }}
              />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyFooter;
