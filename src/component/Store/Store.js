import React from 'react'
import MyNavbar from '../MyNavbar'
import BannerGenerics from './BannerGenerics'
import CardData from '../../Card/CardData'
import { Button,Row,Col } from 'react-bootstrap'
import MyFooter from '../Footer/MyFooter'



const Store = () => {

  return (
  <>
  <MyNavbar/>
  <BannerGenerics/>
  <Row>
    <Col style={{paddingLeft:'14rem'}}><CardData/></Col>
    <Col style={{paddingRight:'14rem'}}> <CardData/></Col>
  </Row>
  <div style={{paddingLeft:'50%'}}>
  <Button className='mt-5'>See the cart</Button>
  </div>
 
 <MyFooter/>
  </>
  )
}

export default Store