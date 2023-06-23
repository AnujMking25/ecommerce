import React from "react";
import { useLocation } from "react-router-dom";
import { Image, Row, Col } from "react-bootstrap";
const ProductDetails = () => {
  const location = useLocation();
  // console.log(location.state);
  return (
    <div style={{padding:'10px'}}>
      
      <Row  style={{ overflowX:'hidden'}}>
        <Col sm={5}>
          <Image
            src={location.state.img.imgurl}
            alt="Product Image is Not found"
            style={{ height: "27rem", width:"auto",marginTop:"2rem",marginLeft:'1rem'}}
          ></Image>
        </Col>
        <Col sm={7} style={{marginTop:"2rem",fontWeight:'500'}}>
          <p>{location.state.img.imgname}(500 cm X 200 cm)</p>
          <span style={{backgroundColor:'green',color:'white',padding:'3px 6px',borderRadius:'8px'}}>4.1 ⭐</span>
          <span style={{marginLeft:'20px',color:'gray'}}>3,223 Ratings & 253 Reviews</span>
        <h5 style={{marginTop:'1rem'}}>Available offers</h5>
        <p>🏷Special PriceGet extra 19% off (price inclusive of cashback/coupon)</p>
        <p>🏷Partner OfferSign up for My Shoping Portal Pay Later and get My Shoping Portal Gift Card worth up to ₹500*</p>
        <p>🏷Partner OfferBuy this product and get upto ₹50 Off</p>
        <p>🏷Combo OfferBuy 3 items save 5%; Buy 4 save 7%; Buy 5+ save 10%</p>
        <p>🏷Bank OfferFlat ₹1,250 Off on HDFC Bank Credit Card EMI Trxns on orders priced between ₹15,000 to ₹39,999</p>
        <p>🏷Bank OfferFlat ₹3,000 Off on HDFC Bank Credit Card EMI Trxns on orders priced between ₹40,000 to ₹49,999</p>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetails;
