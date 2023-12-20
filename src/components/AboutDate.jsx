import React from "react";
import '../style/About.scss'
import { GiFencer } from "react-icons/gi";
import { FaClipboard, FaAddressCard, FaGithub } from "react-icons/fa6";
import skillIcon from "./skill";
import {meDate} from "./Date";


function Content({ isText }) {
  return (
    <div>{isText ? 
      (
      <div className="detailProfile">
        <div class="name">{meDate.name}</div>
        <dl>
          <dt><GiFencer/>CONTACT</dt>
          <dd>{meDate.phone} // {meDate.email}</dd>
        </dl>
        <dl>
          <dt><GiFencer/>SUPPORT PART</dt>
          <dd>{meDate.part}</dd>
        </dl>
        <dl>
          <dt><GiFencer/>SKILL</dt>
          <dd>
            {skillIcon()}
            {/* skill 아이콘을 별도 컴포넌트에 배열로 작성하고 해당 컴포넌트를 별도의 함수로 정의된 컴포넌트 넣어서 호출 */}
          </dd>
        </dl>

        <ul class="popol">
          <li>
            <a target="_blank" title="스토리보드 새창에 열림" rel="noopener noreferrer" href="https://jhs0907.cafe24.com/profile/Storyboard.pdf">스토리보드<FaClipboard /></a>
            {/* etc 파일안과 연동 여부 확인할것, 임시로 주소창 기입 */}
            {/* 외부 링크 직접 연걸 */}
          </li>
          <li>
            <a target="_blank" title="온라인이력서 새창에 열림" rel="noopener noreferrer" href="https://jhs0907.cafe24.com/profile/resume/application.html">온라인 이력서<FaAddressCard /></a>
            {/* etc 파일안과 연동 여부 확인할것, 임시로 주소창 기입 */}
          </li>
          <li>
            <a target="_blank" title="Github 새창에 열림" rel="noopener noreferrer" href="https://github.com/ARISTAHS">GitHub<FaGithub /></a>
          </li>
        </ul>
        {/* 보안의 이유로 외부 링크를 직접 연결할시 rel="noopener noreferrer" 사용할것 */}

      </div>) 
      : (
        <p className="introShort">안녕하세요, 정호석입니다. <br/>
        보시는 사이트는 Creact React App과 다양한 React 라이브러리를 <br />
        사용하여 저의 기존 프로필을 <b>리뉴얼</b>한 포트폴리오입니다. <br />
        <strong>소중한 시간</strong>으로 저의 포트폴리오를 봐주셔서 감사합니다.</p>
      )}
    </div> 
  );
}

export default Content;