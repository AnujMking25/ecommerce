import {Button ,Card ,Row,Col} from "react-bootstrap";
import CartContext from "../StoreContext/CartContext";
import { useContext } from "react";

function MyCard(props) {
const cartCtx=useContext(CartContext);
const addnewItem=()=>{
  cartCtx.addItem({
    id:props.id,
    imageurl:props.imgurl,
    title:props.title,
    price:props.price,


  })
}

  return (
    <Card style={{ width: "16rem" ,margin:'auto',marginTop:'1rem' ,justifyContent:'space-between'}} >
      <Card.Header>
        <Card.Title>{props.title}</Card.Title>
      </Card.Header>
      <Card.Body  className="p-0">
        <Card.Img
          variant="top"
          src={props.imgurl}
         
        />
      </Card.Body>
      <Card.Footer>
        <Row>
          <Col sm={4} > <p>${props.price}</p></Col>
          <Col sm={8} >
          <Button variant="primary" onClick={addnewItem}>Add To Cart</Button>
          </Col>
        </Row>
       
      
      </Card.Footer>
    </Card>
  );
}

export default MyCard;
