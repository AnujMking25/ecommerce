import { Button, Card, Row, Col } from "react-bootstrap";
import classes from "./MyCard.module.css";
import { Link } from "react-router-dom";
function MyCardCurdCurdPost(props) {
  async function addnewItem() {
    let url = "https://crudcrud.com/api/05eda190d6da4f8b820e7ed7dabd3b32/Eecommerce";
    let postData;
    try {
      postData = await fetch(url, {
                                    method: "POST",
                                    body: JSON.stringify({
                                                        id: props.id,
                                                        imageurl: props.imgurl,
                                                        title: props.title,
                                                        price: props.price,
                                                        amount: 1,
                                                        }),
                                    headers:{'Content-Type':'application/json'}
                                 });
          postData=await postData.json();
          console.log(postData);                       
    } catch (error) {
      alert(error);
    }
  }
  const ProductUrL = "/store/ProductDetails";
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
        <Link
          to={ProductUrL}
          state={{ img: { imgurl: props.imgurl, imgname: props.title } }}
        >
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

export default MyCardCurdCurdPost;
