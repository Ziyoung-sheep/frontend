let data = '강내연,김나경,김도연,김민규,한종석,구승회,박시현,송명보,이원규,이종현,정지원,조지영';
let nameList = data.split(",");
const $userList = document.querySelector('#user-list'); // ul 태그객체
const $selectedList = document.querySelector('#selected-list'); // ul 태그객체
const $btnAdd = document.querySelector('#btn-add');

//[1] userList input 값을 입력 => <li class="item">박연미</li> 추가
function makeList(name) {
  let li = document.createElement("li");
  li.classList.add('item');
  li.innerHTML = name;
  $userList.appendChild(li);
  //$userList.innerHTML += `<li class="item">${name}</li>`;
  return li;
}
nameList.forEach(name => makeList(name));

// nodeList는 배열의 자손이 아니라서 고차함수 사용못함 고차함수를 사용하려면 배열로 만들어주기
let liList = [...document.querySelectorAll('#user-list .item')];

function addNewName() {
  const $input = document.querySelector("input");
  const inputValue = $input.value;
  if (!inputValue || !inputValue.trim()) {
    alert('값을 입력해주세요');
    return;
  }

  if (liList.find(li => li.innerHTML === inputValue)) {
    alert('이미 존재하는 값입니다');
    return;
  }
  liList.push(makeList(inputValue));
  $input.value = '';

}

$btnAdd.addEventListener("click", () => {
  console.log("tset");
  addNewName();
});

//[2] 시작버튼을 누르면 순차적으로 on 붙이기

// 값 두개 설정 : 이전, 이후 
let before = liList[0]; // li 객체 첫번째
let idx = 0;
function move() {
  before.classList.remove('on');
  idx++;
  if (idx >= liList.length) idx = 0;
  liList[idx].classList.add('on');
  before = liList[idx];
}

let interval = null;
let isClick = false;
document.querySelector('#btn-start').addEventListener('click', () => {
  if (liList.length == 0) {
    alert('더이상 선택할 값이 없습니다');
    return;
  }
  if (isClick) return;
  clearInterval(interval);
  interval = setInterval(move, 100);
  isClick = true;
})

let timeout = null;

// [1단계 ] - 즉시 멈추기
// function stopTimeOut(time) {
// clearTimeout(timeout);
// timeout = setTimeout(() => {

//   liList[idx].classList.remove('on');
//   liList[idx].classList.add('fix');
//   $selectedList.appendChild(liList[idx]); // $selectedList 값추가  , $userList 값 삭제 
//   liList.splice(idx, 1);
// }, time);
// }

//[2 단계] 천천히 멈추기 
function stopTimeOut(time) {
  // 재귀함수는 반드시 나가는 조건이 있어야한다 
  if (tiem >= 1000) {
    liList[idx].classList.remove('on');
    liList[idx].classList.add('fix');
    $selectedList.appendChild(liList[idx]); // $selectedList 값추가  , $userList 값 삭제 
    liList.splice(idx, 1);
    return;
  }

  clearTimeout(timeout);
  timeout = setTimeout(() => {
    move();
    // 재규함수 => 자신의 함수를 함수 내부에서 실행하는 것! 
    stopTimeOut(time + 100);
  }, time);
}
//[3] 정지버튼을 누르면 on 삭제 fix 붙이기 , user-list있는 li 태그
// 값 삭제하기
document.querySelector('#btn-stop').addEventListener('click', () => {
  if (!isClick) return;
  clearInterval(interval);
  stopTimeOut(100);
  isClick = false;
})