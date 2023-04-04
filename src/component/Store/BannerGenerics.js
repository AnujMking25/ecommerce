import React from 'react'
import { Container } from 'react-bootstrap'

const BannerGenerics = (props) => {
  return (
    <>
    <div style={{background:'gray' ,minHeight:'200px', color:'white'}}>
        <Container className='pt-0' >
        <h1 style={{fontFamily:'-moz-initial',fontSize:'100px',textAlign:'center' }}>The Generics</h1>
        {props.children}
         </Container>
        
    </div>

</>
  )
}
export default BannerGenerics
