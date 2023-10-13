import React, {useState} from 'react';
import '../style/About.scss';
import { FaAnglesDown } from "react-icons/fa6";
import Content from '../components/AboutDate';

function About(){

	const [show, setShow] = useState(false);

	// 클릭 이벤트
	const clickButton = () => {
		setShow(!show);
	}

  return (
    <section id="section2">
			<h3 className="hidden">Profile</h3>
			
			<div>
				<div className="imgContent">
					{show ? (<img src="" alt="Image 2" />) : (<img src="" alt="Image 1" />)}
				</div>
				<div className="textContent">
					{/* {show ? <p>상세한 내용</p> : <p>간단한 내용</p>} */}
					<Content isText={show} />
					{/* 상세 내용, 간단한 내용을 별도 컴포넌트에서 불러오기 */}
				</div>
				<button onClick={clickButton}>
					{show ? '간단히 보기' : '자세히 보기'}
				</button>
			</div>

		</section>
  );
}



export default About;