import React, { FunctionComponent } from 'react';
import background from './Assets/Contact.png'
import styles from "./Contact.module.css";
import Stack from '@mui/material/Stack';


const Contact: FunctionComponent = () => {
    const myStyle={
        backgroundImage: 
        `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '130vh'
    };
   
    return(
      <div style={myStyle}>
        <header className={styles.topHeader}></header>
        <div className={styles.topContainer}>
            <b className={styles.text}>CONTACT US</b>
        </div>
        <div className={styles.topContainer1}>
            <b className={styles.text1}>FILL OUT THE FORM AND WE'LL BE IN TOUCH SOON</b>
        </div>
        <div className={styles.form}>
        <Stack direction="row" spacing={3}>
                <div className={styles.textcontainer}>
                <div className={styles.t1}>
                    <b className={styles.text2}>NAME*</b>
                </div>
                </div>

                <div className={styles.textcontainer}>
                <div className={styles.t1}>
                    <b className={styles.text2}>EMAIL*</b>
                </div>
                </div>                
                
                <div className={styles.textcontainer}>
                <div className={styles.t1}>
                    <b className={styles.text2}>PHONE</b>
                </div>
                </div>   
            </Stack>
            <div className={styles.textcontainer2}>
                <div className={styles.t2}>
                    <b className={styles.text2}>LEAVE US A NOTE</b>
                </div>
            </div> 
        </div>
        <div className={styles.buttoncontainer}>
                <button className={styles.button2}>
                    <div className={styles.div1}>SEND</div>
                </button>
        </div>
      </div>
    );
  };


export default Contact;

