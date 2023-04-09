import React from "react";
import { useLocation } from "react-router-dom";
import { Image, Row, Col } from "react-bootstrap";
const ProductDetails = () => {
  const location = useLocation();
  console.log(location.state);
  return (
    <div style={{ textAlign: "center" }}>
      <h2> {location.state.img.imgname} </h2>
      <Row style={{ height: "30rem"}}>
        <Col sm={4}>
          <Image
            src={location.state.img.imgurl}
            alt="Product Image is Not found"
            style={{ height: "30rem", width: "30rem",float:'left' }}
          ></Image>
        </Col>
        <Col>
          <h2>Review Section</h2>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetails;
