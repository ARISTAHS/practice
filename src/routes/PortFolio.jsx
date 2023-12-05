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
    <section id='section3'>
      <h3 className="hidden">포트폴리오</h3>
      <div>
        <ul className="tab-menu">
          {
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
        <PortFolioUse 
          title={portFolioDate[pofol].title}
          detail1={portFolioDate[pofol].detail1}
          detail2={portFolioDate[pofol].detail2}
          detail3={portFolioDate[pofol].detail3}
          type={portFolioDate[pofol].type}
          time={portFolioDate[pofol].time}
          img={portFolioDate[pofol].img}
          host={portFolioDate[pofol].host}
          github={portFolioDate[pofol].github}
        />
      </div>

    </section>
  );

}



export default PortFolio;