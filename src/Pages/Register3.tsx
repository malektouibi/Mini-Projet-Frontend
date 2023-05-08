import React, { FunctionComponent,useCallback  } from 'react';


import background from './Assets/R3.png'
import { useNavigate } from "react-router-dom"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import IconButton from '@mui/material/IconButton';
import styles from "./Register3.module.css";

const Register3: FunctionComponent = () => {

  const navigate = useNavigate();
  const onForwardClick = useCallback(() => {
    navigate("/R4");
  }, [navigate]);
  const onBackwardClick = useCallback(() => {
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


export default Register3;

