import { Image, Row, Col, Button } from "react-bootstrap";
import classes from "./CartItem.module.css";
import CartContext from "../../StoreContext/CartContext";
import { useContext, useState } from "react";
const CartItem = (props) => {
 useState()
  const cartCtx=useContext(CartContext);
  const removeItemhandler=()=>{
    cartCtx.removeItem(props.id)
  }
 
  return (
    <li className={classes.mainli} id="props.id" key={props.id}>
      <Row style={{marginTop:'1rem'}}>
        <Col sm={5}><Row>
          <Col sm={6} style={{padding:'0'}}>
            <Image src={props.imageurl} style={{ height: "100%", width: "100%" }} />
          </Col>
          <Col sm={6} style={{textAlign:'center'}}>{props.title}</Col>
          </Row>
        </Col>
        <Col sm={2} style={{textAlign:'center',paddingTop:'1rem'}}>{props.price}</Col>
        <Col sm={5}>
          <input defaultValue={props.amount} />
          <Button onClick={removeItemhandler}>Remove</Button>
        </Col>
      </Row>
    </li>
  );
};

export default CartItem;
