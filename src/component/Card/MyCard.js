import { Button, Card, Row, Col } from "react-bootstrap";
import CartContext from "../../StoreContext/CartContext";
import { useContext } from "react";
import classes from "./MyCard.module.css";
import { Link } from "react-router-dom";
function MyCard(props) {
  const cartCtx = useContext(CartContext);
  const addnewItem = () => {
    cartCtx.addItem({
      id: props.id,
      imageurl: props.imgurl,
      title: props.title,
      price: props.price,
      amount: 1,
    });

  };
const ProductUrL='/store/ProductDetails/'+props.id;
  return (
    <Card
      key={props.id}
      style={{ width: "16rem", margin: "2rem", border: "none" }}
    >
      <Card.Header
        className={classes.header}
        style={{ backgroundColor: "white" }}
      >
        <Card.Title>{props.title}</Card.Title>
      </Card.Header>

      <Card.Body style={{ padding: "0px", overflow: "hidden" }}>
       
       <Link to= {ProductUrL}>
          <Card.Img
          src={props.imgurl}
          style={{
            height: "100%",
            width: "100%",
          }} 
        />
        </Link>
      </Card.Body>

      <Card.Footer style={{ backgroundColor: "white", border: "none" }}>
        <Row>
          <Col sm={4}>
            {" "}
            <p>${props.price}</p>
          </Col>
          <Col sm={8} style={{ padding: "0" }}>
            <Button
              style={{
                float: "right",
                backgroundColor: "#56CCF2",
                border: "none",
              }}
              onClick={addnewItem}
            >
              Add To Cart
            </Button>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
}

export default MyCard;
