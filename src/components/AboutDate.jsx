import React from "react";
import '../style/About.scss'
import { GiFencer } from "react-icons/gi";
import { FaClipboard, FaAddressCard, FaGithub } from "react-icons/fa6";
import skillIcon from "./skill";

function Content({ isText }) {
  return (
    <div>{isText ? 
      (
      <div className="detailProfile">
        <div class="name">JEONG HO SEOK</div>
        <dl>
          <dt><GiFencer/>CONTACT</dt>
          <dd>010-9120-1013 // paran0907@naver.com</dd>
        </dl>
        <dl>
          <dt><GiFencer/>SUPPORT PART</dt>
          <dd>Web Publisher & Front-end Developer</dd>
        </dl>
        <dl>
          <dt><GiFencer/>SKILL</dt>
          <dd>
            {/* <p>HTML5, CSS3(SCSS), JavaScript, jQuery, 비동기처리(AJAX/JSON), <br />
            반응형 Framework(Bootstrap), CMS(WordPress), SPA(VUE), Github, Photoshop
            </p> */}
            {skillIcon()}
            {/* skill 아이콘을 별도 컴포넌트에 배열로 작성하고 해당 컴포넌트를 별도의 함수로 정의된 컴포넌트 넣어서 호출 */}
          </dd>
        </dl>

        <ul class="popol">
          <li>
            <a target="_blank" title="스토리보드 새창에 열림" href="#">스토리보드<FaClipboard /></a>
          </li>
          <li>
            <a target="_blank" title="온라인이력서 새창에 열림" href="#">온라인 이력서<FaAddressCard /></a>
          </li>
          <li>
            <a target="_blank" title="Github 새창에 열림" href="https://github.com/ARISTAHS">GitHub<FaGithub /></a>
          </li>
        </ul>

      </div>) 
      : (
        <div>
          <p>안녕하세요, 정호석입니다. <br/>
          <strong>자세히 보기</strong>를 클릭해주세요!</p>
        </div>
      )}
    </div> 
  );
}

export default Content;