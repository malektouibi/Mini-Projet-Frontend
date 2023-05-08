import React, { FunctionComponent } from 'react';
import background from './Assets/Aboutus.png'
import styles from "./Aboutus.module.css";
import Stack from '@mui/material/Stack';


const Aboutus: FunctionComponent = () => {
    const myStyle={
        backgroundImage: 
        `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '110vh'
    };
   
    return(
      <div style={myStyle}>
        <header className={styles.topHeader}></header>
        <div className={styles.topContainer}>
            <b className={styles.text}>ABOUT US</b>
        </div>
        <div className={styles.tableContainer}>
            <Stack direction="row" spacing={0}>
                <div className={styles.textcontainer}>
                <div className={styles.t1}>
                    <b className={styles.text1}>WHAT IS KHADAMNI?</b>
                </div>
                <div className={styles.t2}>
                    <b className={styles.text2}>KHADAMNI IS A FREE SERVICES MARKETPLACE PLATFORM WHERE PEOPLE CAN EASILY POST OR LOOK FOR JOB OFFERS</b>
                </div>
                </div>

                <div className={styles.textcontainer}>
                <div className={styles.t1}>
                    <b className={styles.text1}>WHO CREATED KHADAMNI?</b>
                </div>
                <div className={styles.t2}>
                    <b className={styles.text2}>KHADAMNI WAS THOUGHT, DESIGNED AND DEEVLOPPED BY A TEAM OF YOUNG AMBITOUS SOFTWARE STUDENTS</b>
                </div>
                </div>                
                
                <div className={styles.textcontainer}>
                <div className={styles.t1}>
                    <b className={styles.text1}>WHY KHADAMNI?</b>
                </div>
                <div className={styles.t2}>
                    <b className={styles.text2}>KHADAMNI WAS CREATED TO BRING SERVICE PROVIDERS COLSER TO BUSINESS OWNERS WITHOUT ANY KIND OF INTERFERENCE</b>
                </div>
                </div>   

                <div className={styles.textcontainer}>
                <div className={styles.t1}>
                    <b className={styles.text1}>HOW TO USE KHADAMNI?</b>
                </div>
                <div className={styles.t2}>
                    <b className={styles.text2}>YOU CAN SIMPLY CREATE YOUR ACCOUNT FILL OUT YOUR INFORMATON AND GET STARTED</b>
                </div>
                </div>
            </Stack>
        </div>
      </div>
    );
  };


export default Aboutus;

