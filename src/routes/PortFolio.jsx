import React, {useState} from 'react';
import '../style/PortFolio.scss';
import {portFolioDate} from '../components/Date';
import PortFolioUse from '../components/PortFolioUse';

// 화살표 함수 표현식 사용 
const PortFolio = () => {
  const [pofol, setPofol] = useState(0);

  const current = (index) => {
    setPofol(index);
  }

  return(
    // background img를 css로 각기 기정 하는 방법 , useState로 하여 태그 안에 직접 style 지정하는 방법 존재. -> 전자로 진행.
    <section id='section3' className={`pf-content${pofol + 1}`}>
      <h3 className="hidden">포트폴리오</h3>
        <div className='tab-area'>
          <ul className="tab-menu">
            {
              // map 함수로 portFolioDate 배열 순회
              portFolioDate.map((data, index) => {
                return (
                  <li
                  key={index}
                  onClick={() => {current(index)} }
                  className={pofol === index ? "current" : ""}>
                    <button>
                      {data.type}
                    </button>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <PortFolioUse 
          title={portFolioDate[pofol].title}
          detail1={portFolioDate[pofol].detail1}
          detail2={portFolioDate[pofol].detail2}
          detail3={portFolioDate[pofol].detail3}
          type={portFolioDate[pofol].type}
          time={portFolioDate[pofol].time}
          img={portFolioDate[pofol].img}
          host={portFolioDate[pofol].host}
          imageArray={portFolioDate[pofol].imageArray}
          // github={portFolioDate[pofol].github}
        />
  
    </section>
  );

}

export default PortFolio;