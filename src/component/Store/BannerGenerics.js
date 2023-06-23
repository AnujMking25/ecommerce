import React from 'react'
import { Container } from 'react-bootstrap'

const BannerGenerics = (props) => {
  return (
        <Container fluid style={{background:'gray' ,minHeight:'200px', color:'white',height:'auto',width:'100%'}}>
        <h1 style={{fontFamily:'-moz-initial',fontSize:'100px',textAlign:'center' }}>My Shoping Portal</h1>
        {props.children}
         </Container>
  )
}
export default BannerGenerics
