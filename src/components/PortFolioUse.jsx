import React from "react";
import '../style/PortFolio.scss';

const PortFolioUse = (props) =>{

  return(
    <div className="content-inner">
      <div className="port-img">
        <img src={props.img} alt="포트폴리오 대표이미지" />
      </div>
      <div className="info-area">
        <dl className="detail-info">
          <dt className="info-title">{props.title}</dt>
          <dd>{props.detail1}</dd>
          <dd>{props.detail2}</dd>
          <dd>{props.detail3}</dd>
          <dd>{props.type}</dd>
          <dd>{props.time} (제작기간)</dd>
        </dl>
        <dl className="colors">
          <dt>Color</dt>
          <dd className="color1"></dd>
          <dd className="color2"></dd>
          <dd className="color3"></dd>
        </dl>
        <ul className="skill-img">
          {props.imageArray.map((image, index) => (
            <li key={index}>
              <img src={image} alt={`사용된 스킬 이미지 ${index + 1}`} />
            </li>
          ))}
        </ul>
        
        <div className="url-box">
          <a className="more" href={props.host} target="_blank" rel="noopener noreferrer">View more</a>
        </div>
      </div>
    </div>

  );

}

export default PortFolioUse;