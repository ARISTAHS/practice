import React from "react";
import '../style/About.scss'
import { GiFencer } from "react-icons/gi";
import { FaClipboard, FaAddressCard, FaGithub } from "react-icons/fa6";

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
            <p>HTML5, CSS3(SCSS), JavaScript, jQuery, 비동기처리(AJAX/JSON), <br />
            반응형 Framework(Bootstrap), CMS(WordPress), SPA(VUE), Github, Photoshop
            </p>
          </dd>
        </dl>

        <ul class="popol">
						<li>
							<a target="_blank" href="#">스토리보드<FaClipboard /></a>
						</li>
						<li>
							<a target="_blank" href="#">온라인이력서<FaAddressCard /></a>
						</li>
						<li>
							<a target="_blank" href="https://github.com/ARISTAHS/www.git">GitHub<FaGithub /></a>
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