import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import classes from './Cart.module.css'
import { Button, Row,Col } from 'react-bootstrap'
import CartContext from '../Store/CartContext'
import CartItem from './CartItem'
 
const ModalShow=(props)=>{

    const cartCtx = useContext(CartContext);
    return(
        <>
        <div className={classes.maindiv}>
             <Button onClick={props.onHide}>x</Button>
            <h1>Cart</h1>
            <Row style={{textAlign:'center'}}>
             <Col sm={5} ><h4>ITEM</h4><hr/></Col>
             <Col sm={2}><h4>PRICE</h4><hr/></Col>
             <Col sm={5}><h4>QUANTITY</h4><hr/></Col>
            </Row>
           
            </div>
            {/* {cartCtx.items.map((item)=><CartItem title={item.title} image={item.imageUrl} price={item.price} quentity={item.quantity}/>)} */}
        </>
    )

}
const Cart = (props) => {
    const PortalId=document.getElementById('Overlays');
  return ReactDOM.createPortal(<ModalShow onHide={props.onHide}></ModalShow>,PortalId)
}
export default Cart
