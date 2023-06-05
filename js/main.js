// 메인 이미지 컨트롤 스크립트
const visual = document.querySelector("#visual");  //visual 선언 

// 선언한 visual 내에서 태그 찾기
const imgs = visual.querySelectorAll("img");    
// const text = visual.querySelectorAll("span");
const playBtn = visual.querySelector(".page_number .play");
const stopBtn = visual.querySelector(".page_number .stop");
const buttons = visual.querySelectorAll(".page_number span.btn");
const pre = visual.querySelector(".contral .pre");
const next = visual.querySelector(".contral .next");


const totalImage = imgs.length; // 이미지 전체 갯수
let currentIndex = 0; // 현재 이미지 
let intervalId;  // setinterval ID 초기값 설정

function changeImage(){
  const img = 

}

setInterval(changeImage,2000);