import React, {useState } from "react";
import ReactDOM from "react-dom";
import classes from "./Cart.module.css";
import { Button, Row, Col } from "react-bootstrap";
import CartItem from "./CartItem";
const ModalShow = (props) => {
const [showList,setShowList]=useState('')
  let url = "https://crudcrud.com/api/05eda190d6da4f8b820e7ed7dabd3b32/Eecommerce";
  
  const GetDataCurdCurd= async ()=>{
        try {
            let response=await (await fetch(url)).json()

            // data send to cart
          setShowList(<ul>{response.map((item) => 
                <CartItem
                  key={item._id}
                  id={item._id}
                  title={item.title}
                  imageurl={item.imageurl}
                  price={item.price}
                  amount={item.amount}
                />
              )}</ul>)
          
        } catch (error) {
          alert(error)
        }
        
}
const onShowdata=()=>{
GetDataCurdCurd();
}
 
  return (
    <>
      <div className={classes.maindiv}>
        <Button onClick={props.onHide}>x</Button>
        <Button onClick={onShowdata}>Show Item</Button>
        <h1>Cart</h1>
        <Row style={{ textAlign: "center" }}>
          <Col sm={5}>
            <h4>ITEM</h4>
            <hr />
          </Col>
          <Col sm={2}>
            <h4>PRICE</h4>
            <hr />
          </Col>
          <Col sm={5}>
            <h4>QUANTITY</h4>
            <hr />
          </Col>
        </Row>
        <div>{showList}</div>
        {/* <h1>Total  ${cartCtx.totalAmount}</h1> */}
      </div>
     
    </>
  );
};
const CartCurdCurd = (props) => {
  const PortalId = document.getElementById("Overlays");
  return ReactDOM.createPortal(
    <ModalShow onHide={props.onHide}></ModalShow>,
    PortalId
  );
};
export default CartCurdCurd;
