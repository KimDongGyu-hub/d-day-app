// 1. 현재날짜 가져오기
let today = new Date();
console.log(today);

// 2. 특정날짜 가져오기
let date1 = new Date("2024-06-21");
console.log(date1);

// 3. 날짜 객체 메서드
let date2 = new Date(2024, 6, 17, 12, 2, 3);
date2 = new Date();

console.log(date2.getFullYear()); // 년도
console.log(date2.getMonth()); // 1월: 0 / 2월 1 ... 0 ~ 11
console.log(date2.getDate()); // 일
console.log(date2.getDay()); // 요일은 일요일:0부터 시작한다. 0 ~ 6

console.log(date2.getHours()); // 시
console.log(date2.getMinutes()); // 분
console.log(date2.getSeconds()); // 초
console.log(date2.getMilliseconds()); // 밀리초

// 4. 날짜 설정하기
let date4 = new Date();
date4.setFullYear(2023);
console.log(date4);

// 5. 날짜 계산하기
let curDate = new Date();
let afterDater = new Date();
afterDater.setMonth(9);
console.log(curDate);
console.log(afterDater);
console.log(`========================`);
let diff = afterDater - curDate;
console.log(diff);
let diffSecond = diff / 1000;
let diffMinutes = diffSecond / 60;
let diffHours = diffMinutes / 60;
let diffday = diffHours / 24;

console.log(diffday);

// 날짜와 날짜 사이의 일수 구하기
let remainDay = diff / (1000 * 60 * 60 * 24);
// Math.ceil() = 소수점 올림
console.log(Math.ceil(remainDay));
