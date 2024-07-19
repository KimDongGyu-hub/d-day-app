// input 태그 가져오기
let date = document.getElementById("date");
// h3 태그 가져오기 (현재날짜 출력)
let curDateElement = document.getElementById("curtDate");
// p태그 가져오기 (결과출력)
let resultElement = document.getElementById("result");
// 버튼 태그가져오기 (날짜 계산버튼)
let calBtn = document.getElementById("calBtn");

let curDate = new Date();
let curYear = curDate.getFullYear();
let curmonth = curDate.getMonth() + 1;
let curDay = curDate.getDate();
let dayOfweek = curDate.getDay();

let dd = "";
switch (dayOfweek) {
  case 0:
    dd = "일";
    break;
  case 1:
    dd = "월";
    break;
  case 2:
    dd = "화";
    break;
  case 3:
    dd = "수";
    break;
  case 4:
    dd = "목";
    break;
  case 5:
    dd = "금";
    break;
  case 6:
    dd = "토";
    break;
  default:
    dd = "";
}

curDateElement.innerHTML = `${curYear}년 ${curmonth}월 ${curDay}일 ${dd}요일`;

function getDiffday(selectedDate) {
  let diff = selectedDate - curDate;
  let diffday = Math.ceil(diff / (1000 * 60 * 60 * 24));
  return diffday;
}

calBtn.addEventListener("click", () => {
  // input 태그에서 선택된 날짜문자열을
  // 날짜 객체로 변환
  let selectedDate = new Date(date.value);
  // 밀리초
  let diff = selectedDate - curDate;
  let diffday = Math.ceil(diff / (1000 * 60 * 60 * 24));
  resultElement.innerHTML = `D-day까지 ${diffday}일 남았습니다.`;
  // 스타일 시트 적용하기
  resultElement.style = "color:green; font-size:20px";
});

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", () => {
  // input text 태그의 값 가져오기
  let tittle = document.getElementById("title").value;
  // 날짜 값 가져오기
  let date = document.getElementById("date").value;
  // 함수를 사용해서 날짜 차이 값 반환
  let diffDay = getDiffday(new Date(date));
  let ul = document.getElementById("ddayList");
  // li태그 생성
  let li = document.createElement("li");
  li.innerHTML = `<span style='color:red'>${tittle}</span> ${diffDay}까지 남은 날짜`;
  ul.appendChild(li);
});
