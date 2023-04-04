import React from 'react'
import BannerGenerics from './BannerGenerics'
import CardData from '../../Card/CardData'
import { Container,Button,Row,Col } from 'react-bootstrap'
import MyFooter from '../Footer/MyFooter'



const Store = () => {

  return (
  <>
  <BannerGenerics/>
  <Container className='mt-5'>
 <h1 style={{fontFamily:'cursive' ,textAlign:'center'}}>MUSIC</h1>
</Container>
<Container fluid>
<Row>
    <Col style={{paddingLeft:'14rem'}}><CardData/></Col>
    <Col style={{paddingRight:'14rem'}}> <CardData/></Col>
  </Row>
  <div style={{paddingLeft:'47%'}}>
  <Button className='mt-5'>See the cart</Button>
  </div>
</Container>
  
 
 <MyFooter/>
  </>
  )
}

export default Store