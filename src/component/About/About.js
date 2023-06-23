// ***************** code for About Page***************************
import React from 'react'
import classes from './About.module.css'
import BannerGenerics from '../Store/BannerGenerics';
import { Container } from 'react-bootstrap';
import AboutBody from './AboutBody';
import MyFooter from '../Footer/MyFooter';

const About = () => {
  return (
   <>
   <BannerGenerics/>
   <Container className={classes.container}>
 <h2>About</h2>
</Container>
<AboutBody/>
<MyFooter/>
   </>
  )
}
export default About;
