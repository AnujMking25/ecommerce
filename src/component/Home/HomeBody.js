import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import MyFooter from '../Footer/MyFooter'
const HomeBody = () => {
  return (
    <>
    <Container style={{padding:'1rem 7rem 1rem 7rem'}}>
      <h2 style={{fontFamily:'Metal Mania',fontSize:'30px',textAlign:'center'}}>Tour</h2>
        <Row className='mt-1'>
            <Col sm={2}>JUL16</Col>
            <Col sm={3}>DETROIT, MI</Col>
            <Col sm={4}>DTE ENERGY MUSIC THEATRE</Col>
            <Col sm={3}><Button>Buy TICKETS</Button></Col>
        </Row><hr/>
        <Row className='mt-1'>
            <Col sm={2}>JUL16</Col>
            <Col sm={3}>DETROIT, MI</Col>
            <Col sm={4}>DTE ENERGY MUSIC THEATRE</Col>
            <Col sm={3}><Button>Buy TICKETS</Button></Col>
        </Row><hr/>
        <Row className='mt-1'>
            <Col sm={2}>JUL16</Col>
            <Col sm={3}>DETROIT, MI</Col>
            <Col sm={4}>DTE ENERGY MUSIC THEATRE</Col>
            <Col sm={3}><Button>Buy TICKETS</Button></Col>
        </Row><hr/>
    </Container>
    <MyFooter/>
    </>
  )
}

export default HomeBody