import React from "react";
import '../style/PortFolio.scss';
// import {SiGithub} from "react-icons/si";

const PortFolioUse = (props) =>{
  return(
    <div className="content">
      <div className="port_img">
        <img src={props.img} alt="포트폴리오 대표이미지" />
      </div>
      <div className="con_info">
        <dl>
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
        
        <div className="url_box">
          <a href={props.host} target="_blank" rel="noopener noreferrer"></a>
          <a href={props.github} target="_blank" rel="noopener noreferrer"></a>
        </div>
      </div>
    </div>

  );

}

export default PortFolioUse;