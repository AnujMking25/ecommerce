import React from 'react'
import BannerGenerics from '../component/Store/BannerGenerics';
import { Container } from 'react-bootstrap';
import AboutBody from './AboutBody';
import MyFooter from '../component/Footer/MyFooter';
const About = () => {
  return (
   <>
   <BannerGenerics/>
   <Container className='mt-5'>
 <h2 style={{fontFamily:'Metal Mania' ,textAlign:'center',fontSize:'30px',fontWeight:'bold'}}>About</h2>
</Container>
<AboutBody/>
<MyFooter/>
   </>
  )
}
export default About;
