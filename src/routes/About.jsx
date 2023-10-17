import React, {useState} from 'react';
// import '../style/About.scss';
// import { FaAnglesDown } from "react-icons/fa6";
import Content from '../components/AboutDate';

function About(){

	const [show, setShow] = useState(false);

	// profile 간단히 보기와 자세히 보기에 각각 다른 css를 적용해야해서 Custom Hook 사용
	function useProfileClass(show) {
		return show ? 'profile' : 'profile profile-left';
	}

	// 클릭하면 숨겨진 내용 오픈
	const clickButton = () => {
		setShow(!show);
	}

	const profileClass = useProfileClass(show);

  return (
    <section id="section2">
			<h3 className="hidden">Profile</h3>
			
			<div className={profileClass}>
				<div className="imgContent">
					{show ? (<img src="" alt="Image 2" />) : (<img src="" alt="Image 1" />)}
				</div>
				<div className="textContent">
					{/* {show ? <p>상세한 내용</p> : <p>간단한 내용</p>} */}
					<Content isText={show} />
					{/* 상세 내용, 간단한 내용을 별도 컴포넌트에서 불러오기 */}
				</div>
				<button onClick={clickButton}>
					{show ? (
						<div> 
							<span>간단히 보기</span>
						</div>
						) : 
						(
						<div>
							<span>자세히 보기</span>
						</div>
						)}
				</button>
			</div>

		</section>
  );
}



export default About;