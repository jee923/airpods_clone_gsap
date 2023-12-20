const img = document.querySelector("img");

// 애플 이미지 경로
// https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/0001.jpg

// 변수 만들기 : a가 숫자니까 숫자를 문자로 변환(주소 도메인은 문자 밖에 못들어감)
// const a = 1;
// const b = a.toString();

// console.log(b);

const a = 10;
const b = a.toString().padStart(4, "0"); // 내가 채운 숫자 이외에는 0으로 처리하는 기능
// 지정된 숫자에 대해 첫번째 파라미터 길이로 두번째 파라미터로 문자로 채워줌

console.log(b);
