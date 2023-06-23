import React from "react";
import BannerGenerics from "./BannerGenerics";
import CardData from "../Card/CardData";
import { Container, Button, Row} from "react-bootstrap";
import MyFooter from "../Footer/MyFooter";

const Store = () => {
  return (
    <>
      <BannerGenerics />
      <Container className="mt-5">
        <h1 style={{ fontFamily: "cursive", textAlign: "center" }}>Product</h1>
      </Container>
      <Container>
        <Row style={{ width: "60%", margin: "auto" }}>
          <CardData />
        </Row>
        <div style={{ paddingLeft: "47%" }}>
          <Button className="mt-5" style={{backgroundColor:"#56CCF2",border:'none'}}>See the cart</Button>
        </div>
      </Container>

      <MyFooter />
    </>
  );
};

export default Store;
