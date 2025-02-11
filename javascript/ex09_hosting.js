// 함수나 변수의 선언부가 호이스팅 된다! 

function testHi() {
  console.log("hi~!!");
}
testHi();

sayHello();

// 함수를 변수의 값으로 사용하는 경우는 선언부 아니기때문에 호이스팅이 안된다 
let sayHello = function hi() {
  console.log("hello~~!!!");
}