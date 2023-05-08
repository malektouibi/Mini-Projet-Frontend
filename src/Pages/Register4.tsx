import React, { FunctionComponent,useCallback  } from 'react';

import background from './Assets/R4.png'
import { useNavigate } from "react-router-dom"

import styles from "./Register4.module.css";

const Register2: FunctionComponent = () => {
  const navigate = useNavigate();
  const onForwardClick = useCallback(() => {
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
      <div style={myStyle} >
          <header className={styles.topHeader}>
        <div className={styles.topContainer}>
            <div className={styles.buttoncontainer}>
                <button className={styles.button1}>
                    <div className={styles.div1} onClick={onForwardClick}>CONTINUE TO ACCOUNT </div>
                </button>
                </div>
                </div>
         </header>

      </div>
    );
  };


export default Register2;

