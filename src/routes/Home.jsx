import '../style/Home.scss';
import '../style/common.scss';
import TypeIt from "typeit-react";

function Home(){
  return (
    <section id='section1'>
      <h3 className='hidden'>Home</h3>
      <div className='home'>
        <TypeIt>멈추지 않고 <strong>저의 길을 나아가는</strong> <br />
                프론트 엔드 & 웹 퍼블리셔 <strong>정호석</strong>입니다.</TypeIt>
      </div>
      <a href="#">SCROLL DOWN</a>
    </section>
  );
}

export default Home;