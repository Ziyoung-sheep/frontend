//  자바는 this 고정값 => 객체의 주소값 
// 자바스크립트 
// 일반함수의 this : 함수가 호출되는 곳의 this 값 
// 객체 안에 메서드 => 함수가 호출되는 곳이 객체 안 => 기본 this가 객체 주소 
// 이게 메서드라고 하더라고 콜백함수로 메서드가 호출이되면 기본적으로 this 객체 주소가 아니라 콜백을 호출한 객체의 this 변경!!! 

// 화살표 함수 => this 바인딩을 하지 않는다 = 상위 스코프의 this 값으로 바인딩 

function test() {
  console.log(this);
}

let test1 = () => {
  console.log(this)
}

// window.test();
test();
console.log("-----------");
//window.test1();
test1();


console.log(this); // 현재 실행컨텍스트 this  => window.this
console.log(globalThis); // 전역의 실행 컨택스트 => window , global 
console.log(this == globalThis); // ES11 => 2020 

// console.log("-----------");
// test();

const cat = {
  name: '나비',
  age: 10,
  callOwner: function () {
    console.log(this);
    return `집사야 ${this.name} 배고파 밥줘!`
  },
  printInfo: () => {
    console.log(this);
    return ` ${this.name} , ${this.age}`
  },
  printHello() {
    console.log(this.name, 'hello');
  }
}

console.log(cat);
console.log(cat.callOwner());
console.log("--------------------")
// 화살표함수는 바인딩이 안되기 때문에 bind 할수가 없음
const test2 = cat.printInfo.bind(cat)();
console.log("--------------------")
console.log(cat.printInfo())
console.log(cat.printHello());