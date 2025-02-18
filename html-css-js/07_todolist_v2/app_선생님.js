class App {
  constructor() {
    this.listDom = document.querySelector('#list');
    this.inputTitle = document.querySelector('#title');
    this.inputContent = document.querySelector('#content');
    this.addBtn = document.querySelector('#addBtn');
    this.garbage = document.querySelector("#garbage");
    this.msgBox = document.querySelector(".msg-box");

    this.idx = 0;
    this.todoList = [];
    this.init();

  }

  init() {
    this.listDom.innerHTML = '';
    this.addBtn.addEventListener('click', this.addTodo);

    this.garbage.addEventListener("dragover", e => {
      // console.log("test1");
      e.preventDefault();
    });
    this.garbage.addEventListener("drop", e => {
      e.preventDefault();
      this.deleteTodo(e);
    });
    this.getTodo();
  }
  // 값추가 
  addTodo = () => {
    const title = this.inputTitle.value;
    const content = this.inputContent.value;
    if (!title.trim() || !content.trim()) {
      alert("필수 값이 존재하지않습니다");
      return;
    }
    let idx = ++this.idx;
    const div = this.makeTodo(idx, title, content);
    this.todoList.push({ idx, title, content });
    this.listDom.appendChild(div);
    console.log(this.todoList);
    // {idx : idx , title : title, content: content}

    this.inputTitle.value = '';
    this.inputContent.value = '';
    this.saveStorage();


  }

  // 이미 스토리지에 값이 있으면 불러오기 
  getTodo() {
    if (!localStorage.getItem('todo_list')) return;
    this.todoList = JSON.parse(localStorage.getItem('todo_list'));

    //dom tree 에다가도 생성 
    this.todoList.forEach(todo => {
      const div = this.makeTodo(todo.idx, todo.title, todo.content);
      this.listDom.appendChild(div);
    })
  }

  // html todo 값 추가하는 메서드 
  makeTodo(idx, title, content) {
    let div = document.createElement('div'); // <div></div>
    div.innerHTML = `<div class="item" data-idx="${idx}" draggable="true" >
        <h4 class="title">${title}</h4>
        <span class="msg">${content}</span>
      </div>`;
    div.addEventListener("dragstart", e => {
      //console.log("test idx = " + idx);
      e.dataTransfer.setData("idx", idx);
    })
    this.idx++;
    return div;
  }

  deleteTodo = (e) => {
    const idx = e.dataTransfer.getData('idx');
    console.log("idx=" + idx);
    const todo = this.todoList.find(obj => obj.idx == idx);
    console.log("todo=" + todo);
    const itemList = [...document.querySelectorAll('.item')];
    const delItem = itemList.find(item => item.dataset.idx == idx);
    //console.log(delItem);
    // todoList 삭제 
    this.todoList.splice(this.todoList.findIndex(obj => obj == delItem), 1);
    delItem.classList.add("off");
    setTimeout(() => {
      // dom tree 삭제 
      this.showToast("글삭제가 완료되었습니다");
      delItem.parentElement.remove();
    }, 400);

  }

  saveStorage() {
    localStorage.setItem('todo_list', JSON.stringify(this.todoList));
  }

  showToast(msg) {
    this.msgBox.innerHTML = msg;
    this.msgBox.classList.add('on');
    setTimeout(() => {
      this.msgBox.classList.remove('on');
    }, 2000);

  }

}

window.addEventListener("load", () => {
  window.app = new App();
})