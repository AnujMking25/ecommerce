import React, { useContext} from "react";
import ReactDOM from "react-dom";
import classes from "./Cart.module.css";
import { Button, Row, Col } from "react-bootstrap";
import CartContext from "../../StoreContext/CartContext";
import CartItem from "./CartItem";

const ModalShow = (props) => {
  const cartCtx = useContext(CartContext);
   const showlist=<ul>{cartCtx.items.map((item) => 
    <CartItem
      key={item.id}
      id={item.id}
      title={item.title}
      imageurl={item.imageurl}
      price={item.price}
      amount={item.amount}
    />
  )}</ul>
   
  return (
    <>
      <div className={classes.maindiv}>
        <Button onClick={props.onHide}>X</Button>
        <h1>Cart</h1>
        <Row style={{ textAlign: "center" }}>
          <Col sm={5}>
            <h4>ITEM</h4>
          </Col>
          <Col sm={3}>
            <h4>PRICE</h4>
          </Col>
          <Col sm={4}>
            <h4>QUANTITY</h4>
          </Col>
        </Row>
        <div>{showlist}</div>
        <h1>Total  ${cartCtx.totalAmount}</h1>
      </div>
     
    </>
  );
};
const Cart = (props) => {
  const PortalId = document.getElementById("Overlays");
  return ReactDOM.createPortal(
    <ModalShow onHide={props.onHide}></ModalShow>,
    PortalId
  );
};
export default Cart;
