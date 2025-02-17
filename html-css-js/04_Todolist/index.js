let $input = document.querySelector("input");
let idNum = 2;
let $items = document.querySelector(".items");
let item_delete = document.querySelector(".item_delete");
let liList = [...document.querySelectorAll(".item_name")];

function additem() {
  if (liList.find(i => i === $input.value)) {
    alert('이미 구매한 항목입니다.');
    return;
  }
  // 인풋에 있는 글을 새로운 item으로 삽입하기
  alert($input.value);
  let newItem = document.createElement('li');
  idNum++;
  newItem.classList.add('item_row');
  newItem.setAttribute('data-id', idNum);

  newItem.innerHTML = `
              <div class="item">
                  <span class="item_name">'${$input.value}'</span>
                  <button class="item_delete">
                      <i class="fa-solid fa-trash-can" data-id="${idNum}"></i>
                  </button>
              </div>
          `;
  $items.appendChild(newItem); // 리스트에 추가
  // liList.add($input.value);
  $input.value = '';
}

//삭제버튼을 누르면 해당 아이디 넘버를 가진 아이템을 삭제하기
item_delete.addEventListener('click', () => {
  //아이디 넘버가 같은 아이템 박스 객채로 만들기
  const delItem =
    $items.removeChild(delItem);

}
}

  $input.addEventListener("keydown", (e) => {
    // console.log(e);
    // 키보드에서 한글를 입력받았을때 이벤트 중복처리 방지 
    if (e.isComposing) return;
    if (e.code === 'Enter') {

      //중복체크하기)
    })

