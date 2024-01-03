const img = document.querySelector("img");

// 애플 이미지 경로
// https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/0001.jpg

// 변수 만들기 : a가 숫자니까 숫자를 문자로 변환(주소 도메인은 문자 밖에 못들어감)
// const a = 1;
// const b = a.toString();

// console.log(b);

/*
const a = 10;
const b = a.toString().padStart(4, "0"); // 내가 채운 숫자 이외에는 0으로 처리하는 기능
// 지정된 숫자에 대해 첫번째 파라미터 길이로 두번째 파라미터로 문자로 채워줌

console.log(b);
*/

// Hero Section 높이 지정 : 헤더 높이를 제외한 높이
const headerHeight = document.querySelector("header").offsetHeight;
const heroSection = document.querySelector(".section-01");

heroSection.style.marginTop = headerHeight + 50 + "px";

// GSAP 효과 지정
const imgObj = document.querySelector("#hero-lightpass");
const mainText = document.querySelector(".main-elem");
const msgText1 = document.querySelector(".msg-elem-01");
const msgText2 = document.querySelector(".msg-elem-02");
const msgText3 = document.querySelector(".msg-elem-03");
const msgText4 = document.querySelector(".msg-elem-04");

// Image Sequence Setting
const frameCount = 147;
const images = []; // 이미지를 저장할 배열 변수
const airpods = {
  // timeline에 사용할 객체: 초기값 0
  frame: 0,
};

// Image 배열로 추출
const currentFrame = (index) =>
  `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${(
    index + 1
  )
    .toString()
    .padStart(4, "0")}.jpg`;

for (let i = 0; i < frameCount; i++) {
  images.push(currentFrame(i));
}

// console.log(images);

/* 
const currentFrame = (index) => {
  `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${(index + 1).toString().padStart(4, "0")}.jpg`;
};
// 화살표 함수에 리턴값이 하나면 중괄호를 빼도 됨
*/

/*  화살표 함수
const a = (b) =>{
  return b;
}
// 위 아래 같은 코드
const a = (b) => b;
// 리턴이 하나면 괄호를 빼도 상관이 없음
*/

let tl0 = gsap.timeline();
tl0
  .add("start0") // 시작 지점 지정 (직접 생성하는 이름)
  .fromTo(imgObj, { opacity: 0 }, { opacity: 1, duration: 2 }, "start0")
  .fromTo(mainText, { opacity: 0 }, { opacity: 1, duration: 2 }, "start0");

//scrollMagic 효과 지정 : 이미지 시퀀스 실행
let tl1 = gsap.timeline();
// 시퀀스 시작
tl1
  .add("start0")
  .to(mainText, { opacity: 0, duration: 3, y: -500 }, "start0") // ;를 지우면 마침표 없이 끝내서 효과를 연결시킴
  .to(
    airpods,
    {
      duration: 8,
      frame: 140,
      snap: "frame", // frame을 snap으로 지정하면, frame이 정수로만 존재하도록 강제 시킴
      ease: "none", // 이미지 시퀀스를 할 때 ease가 잡히면 이상해지기 때문에 none으로 처리
      onUpdate: () => {
        // onUpdate 함수 : 이미지가 변경될 때
        imgObj.setAttribute("src", images[airpods.frame]);
      },
    },
    "start0"
  )
  .add("start1")
  .to(msgText1, { duration: 4, opacity: 1, y: -50 }, "start1")
  .to(msgText1, { duration: 4, opacity: 0, y: -100 })

  .add("start2")
  .to(msgText2, { duration: 4, opacity: 1, y: -50 }, "start2")
  .to(msgText2, { duration: 4, opacity: 0, y: -100 })

  .add("start3")
  .to(msgText3, { duration: 4, opacity: 1, y: -50 }, "start3")
  .to(msgText3, { duration: 4, opacity: 0, y: -100 })

  .add("start4")
  .to(msgText4, { duration: 4, opacity: 1, y: -50 }, "start4")
  .to(msgText4, { duration: 4, opacity: 0, y: -100 })

  .to(imgObj, { duration: 36, scale: 0.5, ease: Power1.easeIn }, "start0");

// ScrollMagic 효과 지정 : 이미지 시퀀스 실행
let controller = new ScrollMagic.Controller(); // scrollmagic 컨트롤러 생성

let scene1 = new ScrollMagic.Scene({
  triggerElement: ".section-01",
  duration: "4000", // 4초
  triggerHook: 0.1, // 0.1 = 10% from the top of the viewport 화면 끝에서 10%정도 스크롤이 내려왔을 때 시작
})
  .setTween(tl1)
  .setPin(".section-01")
  .addTo(controller) // 컨트롤러에 추가
  .addIndicators(); // makers같은 기능 (효과를 확인하기 위한 인디케이터 추가)
