import '../style/About.scss';
import { FaAnglesDown } from "react-icons/fa6";

function About(){
  return (
    <section id="section2">
			<h3 class="hidden">Profile</h3>
			<div class="profile">		
				<div class="photo"></div>

				<div class="text">
					<div class="name">JEONG HO SEOK</div>
	
					<dl>
						<dt><i class="fa-solid fa-robot"></i>CONTACT</dt>
						<dd>010-9120-1013 // paran0907@naver.com</dd>
					</dl>
					<dl>
						<dt><i class="fa-solid fa-robot"></i>SUPPORT PART</dt>
						<dd>Web Publisher & Front-end Developer</dd>
					</dl>
					<dl>
						<dt><i class="fa-solid fa-robot"></i>SKILL</dt>
						<dd>
						 <p>HTML5, CSS3(SCSS), JavaScript, jQuery, 비동기처리(AJAX/JSON), <br /> 
						반응형 Framework(Bootstrap), CMS(WordPress), SPA(VUE), Github, Photoshop</p>
						</dd>
					</dl>

					<div class="skill">
						{/* <img src="./images/html5.png" alt="html 이미지" />
						<img src="./images/css3.png" alt="css3 이미지" />
						<img src="./images/javascript.png" alt="javascript 이미지" />
						<img src="./images/jquery.png" alt="jquery 이미지" />
						<img src="./images/json.png" alt="json 이미지" />
						<img src="./images/ajax.png" alt="ajax 이미지" />
						<img src="./images/bootstrap.png" alt="bootstrap 이미지" />
						<img src="./images/wordpress.png" alt="wordpress 이미지" />
						<img src="./images/sass.png" alt="sass 이미지" />
						<img src="./images/vuelogo.png" alt="vue 이미지" />
						<img src="./images/github.png" alt="github 이미지" />
						<img src="./images/photoshop.png" alt="photoshop 이미지" /> */}
					</div>

					<ul class="popol">
						<li>
							<a target="_blank" href="./Storyboard.pdf">스토리보드<i class="fa-solid fa-clipboard"></i></a>
						</li>
						<li>
							<a target="_blank" href="./resume/application.html">온라인이력서<i class="fa-solid fa-address-card"></i></a>
						</li>
						<li>
							<a target="_blank" href="https://github.com/ARISTAHS/www.git">GitHub<i class="fa-brands fa-github"></i></a>
						</li>
					</ul>
				</div>

			</div>
		</section>
  );
}



export default About;