import { SiHtml5, SiCss3, SiJavascript, SiJquery, SiBootstrap, SiWordpress, SiReact, SiSass, SiAdobephotoshop, SiGithub} from "react-icons/si";

import pc from '../etc/samsungPc.png';
import mobile from '../etc/mobile_fullshot.png';
import bootstrap from '../etc/bootstrap_fullshot.png';
import media from '../etc/media_fullshot.png';
import wordpress from '../etc/wordpress_fullshot.png';

export const mySkill = [
  <SiHtml5/>,
  <SiCss3/>,
  <SiJavascript/>,
  <SiJquery/>,
  <SiBootstrap/>,
  <SiWordpress/>,
  <SiReact/>,
  <SiSass/>,
  <SiAdobephotoshop/>,
  <SiGithub/>
]

// About seciton에 들어갈 부분
export const meDate = {
  name : `JEONG HO SEOK`,
  part : `Web Publisher & Front-end Developer`,
  phone : `010-9120-1013`,
  email : `paran0907@naver.com`
}

// 포트폴리오 seciton에 들어갈 부분
export const portFolioDate = [
  {
    id : 1,
    title : `SAMSUNG DISPLAY`,
    type : `적응형 PC`,
    time : `2022. 7. 11 ~ 2022. 8. 14 (약 4주 소요)`,
    detail1:`- xHTML로 제작된 사이트를 HTML5로 개편`,
    detail2:`- 웹접근성과 웹표준을 준수하는 사이트로 제작`,
    detail3:`- 트렌드에 맞는 UI와 디자인으로 리뉴얼 진행` ,
    img : pc,
    host : `https://jhs0907.cafe24.com/`,
    github : `https://github.com/ARISTAHS/w `,
  },
  {
    id : 2,
    title : `SAMSUNG DISPLAY`,
    type : `적응형 Mobile`,
    time : `2022. 8. 22 ~ 2022. 9. 5 (약 2주 소요)`,
    detail1:`- 다양한 모바일 기기의 해상도에 맞춰 제작`,
    detail2:`- 마우스가 아닌 사용자의 터치를 중점적으로 제작`,
    detail3:`- PC와 다른 모바일에 맞는 기능과 컨텐츠 재정렬` ,
    img : mobile,
    host : `https://jhs0907.cafe24.com/mobile/`,
    github : `https://github.com/ARISTAHS/`,
  },
  {
    id : 3,
    title : `Detroit: Become Human`,
    type : `반응형`,
    time : `2022. 10. 10 ~ 2022. 10. 21 (약 2주 소요)`,
    detail1:`- 다양한 해상도의 디바이스에서 이용 가능하게 제작`,
    detail2:`- PC, 태블릿, 모바일 각각에 최적화된 UI`,
    detail3:`- 실시간으로 반응하여 변화하는 레이아웃`,
    img : media,
    host : `https://jhs0907.cafe24.com/media/`,
    github : `https://github.com/ARISTAHS/`,
  },
  {
    id : 4,
    title : `Fencing`,
    type : `Bootstrap`,
    time : `2022. 11. 21 ~ 2022. 11. 24 (약 3일 소요)`,
    detail1:`- 부트스트랩 프레임워크를 사용`,
    detail2:`- 콤포넌트와 부트스트랩 CSS를 활용한 레이아웃`,
    detail3:`- 다양한 기기에 따라 변화하는 그리드 시스템 사용`,
    img : bootstrap,
    host : `https://jhs0907.cafe24.com/bootstrap/`,
    github : `https://github.com/ARISTAHS/`,
  },
  {
    id : 5,
    title : `A Twosome Place`,
    type : `Wordpress`,
    time : `2022. 12. 5 ~ 2022. 12. 7 (약 3일 소요)`,
    detail1:`- 웹사이트 제작 도구인 워드프레스 사용`,
    detail2:`- 워드프레스의 다양한 테마와 플러그인 활용`,
    detail3:`- 실시간으로 반응하여 변화하는 레이아웃`,
    img : wordpress,
    host : `https://jhs0907.cafe24.com/wordpress/`,
    github : `https://github.com/ARISTAHS/`,
  },
  // {
  //   id : 6,
  //   title : `CRA Profile`,
  //   type : `Create React App`,
  //   time : `약 1달`,
  //   img : ``,
  //   host : ``,
  //   github : `https://github.com/ARISTAHS/practice/`
  // },
]
