import React from 'react';
import '../style/About.scss';

function Button({show , onClick}) {
  return(
    <button onClick={onClick}>
      {show ? (
          <span className='preClick'>돌아가기</span>
        ) : 
        (
          <span className='nextClick'> 자세히 보기</span>
        )}
    </button>
  );
}

export default Button;