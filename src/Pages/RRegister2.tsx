import React, { FunctionComponent,useCallback  } from 'react';

import background from './Assets/RR2.png'
import { useNavigate } from "react-router-dom"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import IconButton from '@mui/material/IconButton';
import styles from "./RRegister2.module.css";

const RRegister2: FunctionComponent = () => {
  const navigate = useNavigate();
  const onForwardClick = useCallback(() => {
    navigate("/RR3");
  }, [navigate]);
  const onBackwardClick = useCallback(() => {
    navigate("/RR1");
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
        <IconButton aria-label="delete" sx={{ color: "white", backgroundColor: "#2F4858", borderRadius: "20%" ,height:"45px",width:"45px"} }onClick={onBackwardClick} >
            <ArrowBackSharpIcon />
         </IconButton>
         </div>
         <div className={styles.arrowbutton2}>
        <IconButton aria-label="delete" sx={{ color: "white", backgroundColor: "#2F4858", borderRadius: "20%" ,height:"45px",width:"45px"} }onClick={onForwardClick} >
            <ArrowForwardIcon />
         </IconButton>
         </div>
  
        
         </div>
         </div>
         </header>

      </div>
    );
  };


export default RRegister2;

