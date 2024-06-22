import { useEffect } from 'react';
import '../style/Intro.scss';


export default function Intro(){

  useEffect(() => {
    const intro = document.getElementById('intro');

    const timer = setTimeout(() => {
      intro.classList.add('hidden');
    }, 3000);

    // 컴포넌트가 언마운트될 때 타이머를 정리.
    return () => clearTimeout(timer);
  }, []); 

  return(
    <div id='intro'>
      <h2>인트로 영역 테스트 문구입니다.</h2>
    </div>
  );
}