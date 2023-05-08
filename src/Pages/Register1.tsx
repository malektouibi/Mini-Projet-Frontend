import React, { FunctionComponent,useCallback } from 'react';

import background from './Assets/R1.png'
import { useNavigate } from "react-router-dom"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import IconButton from '@mui/material/IconButton';
import styles from "./Register1.module.css";

const Register1: FunctionComponent = () => {
  const navigate = useNavigate();
  const onForwardClick = useCallback(() => {
    navigate("/R2");
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
      <div style={myStyle} >
        <header className={styles.topHeader}>
        <div className={styles.topContainer}>
        <div className={styles.arrowcontainer} >
        <div className={styles.arrowbutton}>
        <IconButton aria-label="delete" sx={{ color: "white", backgroundColor: "#2F4858", borderRadius: "20%" ,height:"43px",width:"44px"} }onClick={onForwardClick} >
            <ArrowForwardIcon />
         </IconButton>
         </div>
         </div>
         </div>
         </header>
      </div>
    );
  };


export default Register1;

