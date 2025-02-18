//제목 필수입력
//저목, 내용 관련 해서 리스트로 들어가게 하기

const list = document.querySelector('#list');
const addBtn = document.querySelector('#addBtn');
const title = document.querySelector('#title');
const content = document.querySelector('#content');
const todoList = localStorage.getItem('todoList_data') ? JSON.parse(localStorage.getItem('todoList_data')) : [];
const garbage = document.querySelector('#garbage');
let num = todoList.length;

window.addEventListener('road', changeSave);

//HTML 싹 청소하고 새로 입력하기
function changeSave() {
  list.innerHTML = '';
  todoList.forEach(data => {
    let item = document.createElement('div');
    item.classList.add('item')
    item.innerHTML = `
    <h4 class="title">${data.title}</h4>
    <span class="msg">${data.content}</span>
    `
    item.setAttribute('draggable', 'true');
    list.appendChild(item);
  })
}

//드래그 스타트 할 때 인덱스 추가
const items = document.querySelectorAll('.item');
items.forEach(item => {
  item.addEventListener('dragstart', e => {
    if (!e.target.innerText) return;
    const index = Array.from(items).indexOf(e.target);
    e.dataTransfer.setData('idx', index);
    // console.log(e. target.idx);
  })
})


// 추가 버튼을 눌렀을 때
addBtn.addEventListener('click', (e) => {
  // 제목이 비었는지 확인
  if (!title.value || !title.value.trim()) {
    alert('제목은 필수 입력 사항입니다.');
    title.value = '';
    return;
  }
  // 데이터 객체 만들기
  let data = {
    idx: `${num}`,
    title: title.value,
    content: content.value
  };
  num++;
  //배열에 넣기
  todoList.push(data);
  //로컬데이터에 저장하기
  localStorage.setItem('todoList_data', JSON.stringify(todoList));
  //html에 넣기
  changeSave();
  title.value = '';
  content.value = '';
})

garbage.addEventListener('dragover', e => e.preventDefault());
garbage.addEventListener('drop', e => e.preventDefault());

garbage.addEventListener('drop', (e) => {
  console.log(e.dataTransfer);
  let delIdx = e.dataTransfer.getData('idx');
  console.log(delIdx);
  if (delIdx) {
    let delItem = items.find(item => item.idx == delIdx);
    console.log(delItem);
    if (delItem) {
      //배열에서 없애고
      todoList.splice(delIdx, 1);
      console.log(delIdx);
      //데이터베이스에서 없애고
      localStorage.setItem('todoList_data', JSON.stringify(todoList));
      //HTML에서 없애고
      delItem.parentElement.remove();
      changeSave();
    }
  }
})