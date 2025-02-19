class Game1To50 {
  constructor() {
    this.nodeList = [];
    this.frontList = [];
    this.backList = [];
    this.cnt = 1;
    this.container = document.querySelector('.container');
    this.init();
    this.stopwatchPrint = document.querySelector('h2');
    this.stopwatch = null;
    this.second = 0;
    console.log(this.boxs);
  }

  init() {
    console.log("Test");
    // this.timer()
    this.makeLise();
    this.makeGame();
    //박스에 클릭 이벤트 걸어주기
    this.addBoxEvent();
  }

  makeLise() {
    for (let i = 0; i < 25; i++) {
      this.frontList.push('0');
      this.backList.push('0');
    }
    // console.log(this.frontList);
    // console.log(this.backList);
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

  makeGame() {
    this.boxs = [...document.querySelectorAll('.box')];
    //랜덤숫자 1-25까지 frontLine에 넣어주기
    //랜덤숫자 26-50까지 backLine에 넣어주기
    for (let i = 0; i < 25; i++) {
      let idxFront = Math.floor(Math.random() * 25) + 1;
      // console.log('idxFront=' + idxFront);
      let idxBack = Math.floor(Math.random() * 25) + 1;
      // console.log('idxBack=' + idxBack);

      // if (this.frontList[idxFront] != 0 || this.backList[idxBack] != 0) {
      //   i--;
      //   continue;
      // }
      this.frontList[idxFront] = this.cnt;
      this.backList[idxBack] = this.cnt + 25;
      //박스의 아이디 중에 idxFront랑 같은 아이디를 가진 박스에 숫자 넣어주기
      this.boxs.find((e) => {
        if (e.id == idxFront) {
          e.innerHTML = `${this.cnt}`;
        }
      })
      this.cnt++;
    }
    this.cnt = 1;
  }

  addBoxEvent = () => {
    // console.log("===============")
    console.log(this.boxs)
    // this.boxs.forEach(box => {
    //   box.addEventListener('click', this.playGame);
    // })
  }

  playGame = () => {
    //카운트랑 박스 안의 숫자가 동일하면 백리스트 숫자로 바꿔주기
    //카운트가 25가 넘었고 박스 안의 숫자가 동일하면 투명박스로 바꿔주기
    this.cnt++;
    //마지막 카운트 숫자까지 다 완료 되면 게임오버
    if (this.cnt == 51) {
      this.gameOver();
    }

  }

  gameOver() {
    clearInterval(this.timerInterval);
    //
  }

};
window.addEventListener("load", () => {

  window.game = new Game1To50();
})