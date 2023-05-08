import  { FunctionComponent  } from 'react';

import background from './Assets/T.png'



const Feed: FunctionComponent = () => {





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
  

      </div>
    );
  };


export default Feed;

