import React from "react";
import { FaAnglesDown } from "react-icons/fa6";

function Content({ isText }) {
  return (
    <div>{isText ? 
      (
      <div>
        <div class="name">JEONG HO SEOK</div><dl>
          <dt><i class="fa-solid fa-robot"></i>CONTACT</dt>
          <dd>010-9120-1013 // paran0907@naver.com</dd>
        </dl><dl>
            <dt><i class="fa-solid fa-robot"></i>SUPPORT PART</dt>
            <dd>Web Publisher & Front-end Developer</dd>
          </dl><dl>
            <dt><i class="fa-solid fa-robot"></i>SKILL</dt>
            <dd>
              <p>HTML5, CSS3(SCSS), JavaScript, jQuery, 비동기처리(AJAX/JSON), <br />
              반응형 Framework(Bootstrap), CMS(WordPress), SPA(VUE), Github, Photoshop
              </p>
            </dd>
          </dl>
      </div>) 
      : '간단한 내용'}
    </div> 
  );
}

export default Content;