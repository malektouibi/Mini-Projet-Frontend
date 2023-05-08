import React, { FunctionComponent , useCallback } from 'react';
import background from './Assets/welcome.png'
import styles from "./Welcome.module.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from "react-router-dom"

const Welcome: FunctionComponent = () => {
    const navigate = useNavigate();
    const onRegisterClick = useCallback(() => {
      navigate("/signup");
    }, [navigate]);
    const onLoginClick = useCallback(() => {
      navigate("/login");
    }, [navigate]);
    const myStyle={
        backgroundImage: 
        `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'
    };
   
    return(
      <div style={myStyle}>
        <header className={styles.topHeader}>
        <div className={styles.topContainer}>
            <b className={styles.text}>KHADAMNI</b>
            <div className={styles.buttoncontainer}>
                <button className={styles.button1}>
                    <div className={styles.div1} onClick={onLoginClick}>LOGIN</div>
                </button>
                <button className={styles.button2}>
                    <div className={styles.div2} onClick={onRegisterClick}>REGISTER</div>
                </button>
            </div>
        </div>
        </header>


        <div className={styles.centerbody}>
          <div className={styles.opt}>
            <b className={styles.text2}>SAFE, QUICK AND FREE</b>
          </div>
          <div className={styles.line1}>
            <b className={styles.text3}>BOOST YOUR</b>
            <b className={styles.text4}>CAREER</b>
          </div>
          <div className={styles.line2}>
            <b className={styles.text3}>ENJOY WHAT YOU DO</b>
          </div>
        </div>


        <div className={styles.bottombody}>
            <b className={styles.text5}>CREATE YOUR ACCOUNT</b>
          <div className={styles.line1}>
            <b className={styles.text5}>AND GET STARTED</b>
          </div>
          <div className={styles.arrowbutton}>
          <IconButton aria-label="delete" sx={{ color: "white", backgroundColor: "#2F4858", borderRadius: "20%" }} onClick={onRegisterClick}>
            <ArrowForwardIcon />
         </IconButton>
          </div>
        </div>
    
      </div>
    );
  };


export default Welcome;

