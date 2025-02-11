// 함수의 선언식
function sayHi() {
  console.log("h1");
}

sayHi();

// 함수의 표현식 + 익명함수
let sayHello = function () {
  console.log("hello");
}
sayHello();

// 함수의 표현식 + 화살표 함수

let printHi = () => {
  console.log("hi");
  // console.log(arguments);
}

printHi();


// 일반함수 function 

console.log([10, 20, 30] instanceof Array);
console.log({} instanceof Array);

//arguments function 안에만 존재하는 객체
function addNum(x, y = 10) {
  console.log(arguments); // 인자값을들 배열처럼 넣어주는애 
  console.log(typeof arguments); // object
  console.log(arguments instanceof Array);

  console.log(arguments.length);
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
  console.log(arguments[3]);

  return x + y;
}
console.log(addNum()) // NaN 


console.log(addNum(10, 20, 30)) //  30
console.log(addNum(10, 20)) // 30
console.log(addNum(10)) // 20

// 일반함수와 화살표 함수의 차이는 arguments 가 있고 없고
// 화살표함수는 좀더 가벼운 함수 

let minus = (a, b) => { return a - b; }
let multifly = (a, b) => a * b;
console.log('*')
console.log(minus(10, 20));
console.log(multifly(10, 20));

// 자바스크립트에서 함수는 값으로 사용할 수 있다 

let addAll = x => y => z => `x : ${x} y: ${y} z:${z}`;

console.log(addAll(1)(2)(3));

let addTestAll = function (x) {
  return function (y) {
    return function (z) {
      return `x : ${x} y: ${y} z:${z}`;
    }
  }
}

  // 즉시 실행함수 
  (function test(x, y) { console.log(x + y) })(10, 20);