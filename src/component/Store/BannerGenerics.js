import React from 'react'
import { Container } from 'react-bootstrap'

const BannerGenerics = () => {
  return (
    <>
    <div style={{background:'gray' ,height:'200px', color:'white'}}>
        <Container className='mt-1 pt-0' >
        <h1 style={{fontFamily:'-moz-initial',fontSize:'100px',textAlign:'center' }}>The Generics</h1>
         </Container>
        
    </div>
 <Container className='mt-5'>
 <h1 style={{fontFamily:'cursive' ,textAlign:'center'}}>MUSIC</h1>
</Container>
</>
  )
}
export default BannerGenerics
