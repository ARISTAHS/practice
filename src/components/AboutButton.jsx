import React from 'react';
import '../style/About.scss';

function Button({show , onClick}) {
  return(
    <button onClick={onClick}>
      {show ? (
          <span className='preClick'></span>
        ) : 
        (
          <span className='nextClick'></span>
        )}
    </button>
  );
}

export default Button;