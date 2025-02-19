
class TicTacToe {
  constructor(p1, p2) {
    this.p1 = p1;
    this.p2 = p2;
  }
}

class Player {
  constructor(name, color, shape) {
    this.name = name;
    this.color = color;
    this.shape = shape;
  }
}

window.addEventListener("load", () => {
  window.app = new App();
  // window.game = new TicTacToe(new Player('핑크', 'pink', 'O'), new Player('블루', 'blue', 'X'))
})

const game = new TicTacToe(new Player('핑크', 'pink', 'O'), new Player('블루', 'blue', 'X'));

class App {
  constructor() {
    console.log('게임시작');
    this.startBtn = document.querySelector('#start');
    this.turn = true;
    this.cnt = 0;
    this.idx = 0;
    this.gameList = [];
    this.gameContainer = null;
    this.win = -1;
    this.size = 3;
    this.container = document.querySelector('.container');
    this.init();
  };

  init() {
    this.turn = true;
    this.win = -1;
    this.cnt = 0;
    this.makeGameList();
    this.startBtn.addEventListener('click', this.startGame);
  };

  makeGameList() {
    this.gameList = [];
    for (let i = 0; i < 9; i++) {
      this.gameList.push('-1');
    }
    console.log(this.gameList);
  }

  //이벤트 함수용 - >이벤트 객체를 가져올 때 사용
  startGame = () => {
    console.log('버튼 누르는거 되나?');
    this.container.innerHTML = ``;
    this.gameContainer = document.createElement('div');
    this.gameContainer.classList.add('game');
    this.gameContainer.innerHTML = `
    <div class='line' id='firstLine'>
    <div class='box' id='0'></div>
    <div class='box' id='1'></div>
    <div class='box' id='2'></div>
    </div>
    <div class='line' id='secondLine'>
    <div class='box' id='3'></div>
    <div class='box' id='4'></div>
    <div class='box' id='5'></div>
    </div>
    <div class='line' id='lastLine'>
    <div class='box' id='6'></div>
    <div class='box' id='7'></div>
    <div class='box' id='8'></div>
      </div>
    `
    this.container.appendChild(this.gameContainer);
    this.startBtn.remove();
    this.addBoxEvent();
  }

  addBoxEvent() {
    this.boxs = document.querySelectorAll('.box');
    this.boxs.forEach(box => {
      box.addEventListener('click', this.playGame);
    })
  }

  playGame = (e) => {
    const clickedBox = e.target;
    if (clickedBox.classList.contains('checked')) {
      alert('해당 박스는 이미 선택되었습니다.')
      return;
    }
    this.cnt++;
    console.log(this.cnt);
    console.log(clickedBox.id);
    if (this.turn == true) {
      clickedBox.innerHTML = `O`;
      this.gameList[clickedBox.id] = 0;
      clickedBox.classList.add('pink')
      this.turn = false;
    } else {
      clickedBox.innerHTML = `X`;
      this.gameList[clickedBox.id] = 1;
      clickedBox.classList.add('blue')
      this.turn = true;
    }
    console.log(this.gameList);
    clickedBox.classList.add('checked')
    this.checkWinner(Math.floor(clickedBox.id / 3), clickedBox.id % 3, clickedBox.id);
    console.log(this.turn);
    if (this.cnt === this.gameList.length || this.win != -1) { //승리조건도 걸어줘야지
      this.gameOver();
    }
  }

  gameOver() {
    console.log('게임오버 로직');
    console.log('cnt: ' + this.cnt);
    console.log('win: ' + this.win);

    this.gameContainer.remove();
    this.container.innerHTML = `
    <div class=gameOver></div>
    <button id="start">Restart</button>
    `
    const gameOver = document.querySelector('.gameOver');
    if (this.win == 0) {
      gameOver.classList.add('pink')
      gameOver.innerHTML = `핑크가 승리했습니다.`;
    } else if (this.win == 1) {
      gameOver.classList.add('blue')
      gameOver.innerHTML = `블루가 승리했습니다.`;
    } else {
      gameOver.classList.add('noWinner')
      gameOver.innerHTML = `무승부입니다.`;
    }
    this.startBtn = document.querySelector('#start');
    this.init();
  }

  checkWinner(x, y, id) {
    // console.log('승리자를 체크해~~')
    // console.log('x=' + x)
    // console.log('y=' + y)
    let garoFirstIdx = x * 3;
    let seroFirstIdx = y;
    // console.log('garoIdx: ' + garoFirstIdx)
    //가로 체크
    if (this.gameList[garoFirstIdx] != -1) {
      if (this.gameList[garoFirstIdx] == this.gameList[garoFirstIdx + 1] && this.gameList[garoFirstIdx] == this.gameList[garoFirstIdx + 2]) {
        this.whoIsWinner();
        return;
      }
    }
    if (this.gameList[seroFirstIdx] != -1) {
      if (this.gameList[seroFirstIdx] == this.gameList[seroFirstIdx + 3] && this.gameList[seroFirstIdx] == this.gameList[seroFirstIdx + 6]) {
        this.whoIsWinner();
        return;
      }
    }
    if (id % 4 == 0) {
      if (this.gameList[0] != -1 && this.gameList[0] == this.gameList[4] && this.gameList[4] == this.gameList[8]) {
        this.whoIsWinner();
        return;
      }
    }
    if (id >= 2 && id <= 6 && id % 2 == 0) {
      if (this.gameList[2] != -1 && this.gameList[2] == this.gameList[4] && this.gameList[4] == this.gameList[6]) {
        this.whoIsWinner();
        return;
      }
    }

  };

  whoIsWinner() {
    this.win = this.turn == true ? 1 : 0;
  }
}
