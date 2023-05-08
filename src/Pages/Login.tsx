import React, { FunctionComponent,useCallback,useState  } from 'react';
import styles from "./Login.module.css";
import background from './Assets/signinrightside.png'
import { useNavigate } from "react-router-dom"
import image from './Assets/mainlogo.png'
import IconButton from '@mui/material/IconButton';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
const Login: FunctionComponent = () => {
  const navigate = useNavigate();
  const onRegisterClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);
  const onSignINClick = useCallback(() => {
    navigate("/F");
  }, [navigate]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const myStyle={
    backgroundImage: 
    `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '110vw',
    height: '100vh'
};
const style2={
  background: 'white',
  color: 'white',
  height: '4px',
  width: '80px',
};
const style3={
  background: '#33658A',
  color: '#33658A',
  height: '4px',
  width: '80px',
};
  

   
    return(
      <div >
        <div className={styles.pagestyling}>
          <div className={styles.leftsidecontainer}>

            <div className={styles.logo}>
            <img src={image} className={styles.lol} alt="logo" />
            </div>  
            
            <div className={styles.textcontainer1}>
            <div className={styles.t3}>
                    <b className={styles.text3}>SIGN IN TO YOUR ACCOUNT</b>
                </div>
                <div style={style3} className={styles.hline2}></div>

                <div className={styles.buttons}>
                  <IconButton aria-label="delete" sx={{ color: "white", backgroundColor: "#33658A", borderRadius: "100%"  }} className={styles.facebookbutton} >
                    <FacebookOutlinedIcon />
                  </IconButton>
                  <IconButton aria-label="delete" sx={{ color: "white", backgroundColor: "#33658A", borderRadius: "100%" }} className={styles.googlebutton} >
                    <GoogleIcon />
                  </IconButton>
                </div>
                
                <div className={styles.t4}>
                    <b className={styles.text4}>OR CONTINUE WITH</b>
                </div>

                <form className={styles.form}>
                    <input type="text" placeholder="EMAIL" required   value={email}  onChange={(e) => setEmail(e.target.value)} />
                  
                    <input type="password" placeholder="PASSWORD" required   value={password}  onChange={(e) => setPassword(e.target.value)} />
                    

                </form>
                <FormControlLabel control={
                        <Checkbox sx={{color:'#2f4858' ,'&.Mui-checked': {color: '#2f4858',},}}/>
                          }
                          label={
                            <Typography sx={{ fontSize: 14 ,color:'#2f4858'}}>
                              REMEMBER ME
                            </Typography>
                          }
                        className={styles.remember}
                />
                    <button className={styles.button3}>
                       <div className={styles.div3}>FORGOT PASSWORD?</div>
                    </button>
                    <button className={styles.button4} onClick={onSignINClick}>
                       <div className={styles.div4}>SIGN IN</div>
                    </button>
            </div>  

          </div>


          <div style={myStyle}>
            <div className={styles.rightsidecontainer} >
            <div className={styles.textcontainer}>
                <div className={styles.t1}>
                    <b className={styles.text1}>HELLO !</b>
                </div>
                <div style={style2} className={styles.hline}></div>
                <div className={styles.t2}>
                    <b className={styles.text2}>FILL UP YOUR PERSONAL INFORMATION AND START YOUR JOURNEY WITH US</b>
                </div>
                <div className={styles.buttoncontainer}>
                    <button className={styles.button2}>
                       <div className={styles.div2} onClick={onRegisterClick}>GET STARTED</div>
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  };


export default Login;

