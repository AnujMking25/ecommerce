import React from 'react'
import MyNavbar from '../MyNavbar'
import BannerGenerics from './BannerGenerics'

// import { Row ,Col} from 'react-bootstrap'
import CardData from '../../Card/CardData'
import { Button } from 'react-bootstrap'
import MyFooter from '../Footer/MyFooter'



const Store = () => {
  return (
  <>
  <MyNavbar/>
  <BannerGenerics/>
  <CardData/>
 <Button className='mt-5'>See the cart</Button>
 <MyFooter/>
  </>
  )
}

export default Store