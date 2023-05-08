import React, { FunctionComponent } from 'react';
import Welcome from './Welcome';
import Aboutus from './Aboutus';
import Phone from './Phone';
import Contact from './Contact';
import styles from './LandingPage.module.css'
import image from './Assets/phonelogo.png'
const LandingPage: FunctionComponent = () => {
   
    return(
      <div>
        <Welcome></Welcome>
        <Aboutus></Aboutus>
        <div className={styles.image}>
        <img src={image} className={styles.lol} alt="logo" />
        </div>
        <Phone></Phone>
        <Contact></Contact>
      </div>
    );
  };


export default LandingPage;

