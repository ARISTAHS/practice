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

export const meDate = {
  name : `JEONG HO SEOK`,
  part : `Web Publisher & Front-end Developer`,
  phone : `010-9120-1013`,
  email : `paran0907@naver.com`
}

export const portFolioDate = [
  {
    id : 1,
    title : `SAMSUNG DISPLAY`,
    type : `적응형 PC`,
    time : `2022. 7. 11 ~ 2022. 8. 14 (약 4주 소요)`,
    img : pc,
    host : `https://jhs0907.cafe24.com/`,
    github : `https://github.com/ARISTAHS/www`
  },
  {
    id : 2,
    title : `SAMSUNG DISPLAY`,
    type : `적응형 Mobile`,
    time : `2022. 8. 22 ~ 2022. 9. 5 (약 2주 소요)`,
    img : mobile,
    host : `https://jhs0907.cafe24.com/mobile/`,
    github : `https://github.com/ARISTAHS/`
  },
  {
    id : 3,
    title : `Detroit: Become Human`,
    type : `반응형`,
    time : `2022. 10. 10 ~ 2022. 10. 21 (약 2주 소요)`,
    img : media,
    host : `https://jhs0907.cafe24.com/media/`,
    github : `https://github.com/ARISTAHS/`
  },
  {
    id : 4,
    title : `Fencing`,
    type : `Bootstrap`,
    time : `2022. 11. 21 ~ 2022. 11. 24 (약 3일 소요)`,
    img : bootstrap,
    host : `https://jhs0907.cafe24.com/bootstrap/`,
    github : `https://github.com/ARISTAHS/`
  },
  {
    id : 5,
    title : `A Twosome Place`,
    type : `Wordpress`,
    time : `2022. 12. 5 ~ 2022. 12. 7 (약 3일 소요)`,
    img : wordpress,
    host : `https://jhs0907.cafe24.com/wordpress/`,
    github : `https://github.com/ARISTAHS/`
  },
  {
    id : 6,
    title : `CRA Profile`,
    type : `Create React App`,
    time : `약 1달`,
    img : ``,
    host : ``,
    github : `https://github.com/ARISTAHS/practice/`
  },
]
