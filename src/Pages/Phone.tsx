import React, { FunctionComponent } from 'react';
import background from './Assets/Phone.png'

const Phone: FunctionComponent = () => {
    const myStyle={
        backgroundImage: 
        `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '120vh'
    };
   
    return(
      <div style={myStyle}>
 
   
      </div>
    );
  };


export default Phone;

