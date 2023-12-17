import '../style/Home.css';
import TypeIt from "typeit-react";
import { Link } from "react-scroll";
import { FaAnglesDown } from "react-icons/fa6";

function Home(){
  return (
    <section id='Home'>
      <h3 className='hidden'>Home</h3>
      <div className='home'>
        <TypeIt options={{ cursor: false }}><p>멈추지 않고 <strong>저의 길을 나아가는</strong> <br />
        프론트 엔드 & 웹 퍼블리셔 <strong>정호석</strong>입니다.</p></TypeIt>
      </div>
      <Link to='About' spy={true} smooth={true} offset={-70} duration={500} className='scrollDown'> SCROLL DOWN <FaAnglesDown className='downIcon'/></Link>
    </section>
  );
}

export default Home;