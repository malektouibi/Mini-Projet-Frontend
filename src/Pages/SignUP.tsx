import React, { FunctionComponent,useCallback,useState  } from 'react';
import styles from "./SignUP.module.css";
import background from './Assets/signinrightside.png'
import { useNavigate } from "react-router-dom"
import image from './Assets/mainlogo.png'
import IconButton from '@mui/material/IconButton';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import BusinessSharpIcon from '@mui/icons-material/BusinessSharp';

const SignUP: FunctionComponent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [lname, setLName] = useState('');
  const [password, setPassword] = useState('');
  const [BO,setBO]=useState(0);
  const [SP,setSP]=useState(0);
  const navigate = useNavigate();
  const onLoginClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onBOClick = useCallback(() => {
    setBO(1);
    setSP(0);
  },[navigate]);
  const onSPClick = useCallback(() => {
    setBO(0);
    setSP(1);
  },[navigate]);
  const onRegisterClick = useCallback(() => {
    if(BO===0){
    navigate("/RR1");
  }
    if(SP===0){
    navigate("/R1");
  }
  }, [navigate]);
console.log(BO);
console.log(SP);



  const myStyle={
    backgroundImage: 
    `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh'
};
const iconstyle={
  color: "#86bbd8", 
  backgroundColor: "white",
  borderRadius: "100%" ,
  border:"2px solid #86bbd8"
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
                    <b className={styles.text3}> REGISTER</b>
                </div>
                <div style={style3} className={styles.hline2}></div>
                

                <form className={styles.form}>


                <input type="text" placeholder="FIRST NAME" required   value={name}  onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="LAST NAME" required   value={lname}  onChange={(e) => setLName(e.target.value)} />


                    <input type="text" placeholder="EMAIL" required   value={email}  onChange={(e) => setEmail(e.target.value)} />
                  
                    <input type="text" placeholder="PASSWORD" required   value={password}  onChange={(e) => setPassword(e.target.value)} />

                </form>
                    <button className={styles.button3}>
                       <div className={styles.div3}>ARE YOU A</div>
                    </button>
                    <div className={styles.buttons}>
                  <IconButton aria-label="delete" sx={iconstyle} className={styles.facebookbutton} onClick={onBOClick} >
                    <BusinessSharpIcon />
                  </IconButton>
                  <IconButton aria-label="delete" sx={iconstyle} className={styles.googlebutton} onClick={onSPClick} >
                    <AccountCircleSharpIcon />
                  </IconButton>
                </div>
                <div className={styles.topContainer}>
                <div className={styles.t5}>
                    <b className={styles.text5}>BUSINESS OWNER</b>
                </div>
                <div className={styles.t5}>
                    <b className={styles.text5}>SERVICE PROVIDER</b>
                </div>
                </div> 
                    <button className={styles.button4}>
                       <div className={styles.div4} onClick={onRegisterClick}>REGISTER</div>
                    </button>
                    <div className={styles.topContainer2}>
                <div className={styles.t6}>
                    <b className={styles.text6}>EXISTING USER?</b>
                </div>
                <button className={styles.t7}>
                    <div className={styles.text7} onClick={onLoginClick}>SIGN IN</div>
                </button>
                </div> 
            </div>  

          </div>


          <div style={myStyle}>
          </div>
        </div>

      </div>
    );
  };


export default SignUP;

