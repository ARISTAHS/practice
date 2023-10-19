import React from 'react';
import '../style/About.scss';

function Button({show , onClick}) {
  return(
    <button onClick={onClick}>
      {show ? (
        <div className='preClick'> 
          <span>돌아가기</span>
        </div>
        ) : 
        (
        <div className='nextClick'>
          <span>자세히 보기</span>
        </div>
        )}
    </button>
  );
}

export default Button;