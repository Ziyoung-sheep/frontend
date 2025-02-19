class Game1To50 {
  constructor() {
    this.nodeList = [];
    this.frontList = [];
    this.backList = [];
    this.cnt = 1;
    this.container = document.querySelector('.container');
    this.stopwatchPrint = document.querySelector('h2');
    this.stopwatch = null;
    this.second = 0;
    this.boxs = document.querySelectorAll('.box');
    this.init();
  }

  init() {
    this.timer()
    this.makeBox();
    this.boxs = document.querySelectorAll('.box');
    this.makeGame();
    //박스에 클릭 이벤트 걸어주기
    this.addBoxEvent();
  }

  timer() {
    this.stopwatch = setInterval(() => {
      this.second++; //1/100초씩 증가
      let underSec = this.second % 100;
      let sec = Math.floor(this.second / 100) % 60;
      let min = Math.floor(this.second / (100 * 60));
      this.stopwatchPrint.innerHTML = `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}:${String(underSec).padStart(2, "0")}`;
    }, 10);
  }

  makeBox() {
    //여기다 박스 삽입 넣어줘야겠다...
    this.container.innerHTML = ``;
    this.container.innerHTML = `
        <div class="game">
      <div class="line" id="line1">
        <div class="box" id="1"></div>
        <div class="box" id="2"></div>
        <div class="box" id="3"></div>
        <div class="box" id="4"></div>
        <div class="box" id="5"></div>
      </div>
      <div class="line" id="line2">
        <div class="box" id="6"></div>
        <div class="box" id="7"></div>
        <div class="box" id="8"></div>
        <div class="box" id="9"></div>
        <div class="box" id="10"></div>
      </div>
      <div class="line" id="line3">
        <div class="box" id="11"></div>
        <div class="box" id="12"></div>
        <div class="box" id="13"></div>
        <div class="box" id="14"></div>
        <div class="box" id="15"></div>
      </div>
      <div class="line" id="line4">
        <div class="box" id="16"></div>
        <div class="box" id="17"></div>
        <div class="box" id="18"></div>
        <div class="box" id="19"></div>
        <div class="box" id="20"></div>
      </div>
      <div class="line" id="line5">
        <div class="box" id="21"></div>
        <div class="box" id="22"></div>
        <div class="box" id="23"></div>
        <div class="box" id="24"></div>
        <div class="box" id="25"></div>
      </div>
    </div>
    `;
  }

  makeGame() {
    for (let i = 1; i <= 25; i++) {
      this.frontList.push(i);
      this.backList.push(i + 25);
    }

    for (let i = 0; i < 100; i++) {
      let idxFront = Math.floor(Math.random() * 25);
      let idxBack = Math.floor(Math.random() * 25);
      let tempFront = this.frontList[idxFront];
      let tempBack = this.backList[idxBack];
      this.frontList[idxFront] = this.frontList[0];
      this.backList[idxBack] = this.backList[0];
      this.frontList[0] = tempFront;
      this.backList[0] = tempBack;
    }
    console.log(this.frontList);
    console.log(this.backList);
    let j = 0;
    this.boxs.forEach(box => {
      box.innerHTML = `${this.frontList[j++]}`;
    })
  }

  addBoxEvent = () => {
    this.boxs.forEach(box => {
      box.addEventListener('click', this.playGame);
    })
  }

  playGame = (e) => {
    const clickedBox = e.target;
    console.log('id=' + clickedBox.id);
    console.log('num=' + clickedBox.innerHTML);
    console.log('cnt=' + this.cnt)
    if (this.cnt == clickedBox.innerHTML) {
      //카운트랑 박스 안의 숫자가 동일하면 백리스트 숫자로 바꿔주기
      if (this.cnt <= 25) {
        clickedBox.innerHTML = this.backList[clickedBox.id - 1];
      } else {
        //카운트가 25가 넘었고 박스 안의 숫자가 동일하면 투명박스로 바꿔주기
        clickedBox.innerHTML = '';
        clickedBox.classList.add('finishBox');
      }
      this.cnt++;
    } else {
      const hintBox = Array.from(this.boxs).find(e => Number(e.innerHTML) === this.cnt);
      hintBox.classList.add('hint');
      setTimeout(() => {
        hintBox.classList.remove('hint');
      }, 1000);
    }
    //마지막 카운트 숫자까지 다 완료 되면 게임오버
    if (this.cnt == 51) {
      this.gameOver();
    }

  }

  gameOver() {
    // alert('게임종료');
    clearInterval(this.stopwatch);
    //게임판 삭제
    this.container.innerHTML = ``;
    //알림창 나오기
    let yourRecord = document.createElement('div');
    yourRecord.classList.add('gameOver');
    //시간 값을 가져오기
    let underSec = this.second % 100;
    let sec = Math.floor(this.second / 100) % 60;
    let min = Math.floor(this.second / (100 * 60));
    yourRecord.innerHTML = `
    당신의 기록은 ${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}:${String(underSec).padStart(2, "0")} 입니다.
    `;
    let restart = document.createElement('button');
    restart.classList.add('restart')
    restart.innerHTML = `Restart`;
    this.container.appendChild(yourRecord);
    this.container.appendChild(restart);
    const restartBtn = document.querySelector('.restart');
    restartBtn.addEventListener('click', this.restartGame.bind(this));
  }

  restartGame() {
    this.second = 0;
    this.cnt = 1;
    this.frontList = [];
    this.backList = [];
    this.init();
  }

};
window.addEventListener("load", () => {
  window.game = new Game1To50();
})