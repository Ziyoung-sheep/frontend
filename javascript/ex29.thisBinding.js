// this 값은 자바와 다르게 자바스크립트는 유동성이 있다
// this 값을 우리가 직접 설정해줄수있다. 
// function this => 전역에 있는 최상위 객체  this 

// this 바인딩 => this 의 값을 고친다 
// 1. apply()
// 2. call()
// 3. bind()

function printName() {
  // this => 최상위 객체 this (window, global)
  console.log("test");
  return this?.name || '이름이 없습니다';
}

const cat = {
  name: '나비'
}

console.log(printName.call(cat)); // 원래는 최상위 객체의 주소값인데 this => cat의 객체의 주소값으로 변경해서 실행해! 
console.log(printName.apply({ name: '박연미' }));

function addAll(x, y, z) {
  console.log(`x= ${x} y= ${y} z= ${z}`);
  return `${this?.name || '이름이 없습니다'} 결과값 : ${x + y + z}`;
}

console.log(addAll(1, 2, 3));
console.log(addAll.call(cat, 1, 2, 3));
console.log(addAll.apply(cat, [1, 2, 3]));

// call => ,(콤마 , 쉼표) 기반으로 배개 인자값을 this 다음에 순서대로 넘겨준다
// apply => 배열을 기반으로 인자값을 넘겨준다 

const dog = {
  name: '멍멍이'
}

// bind() => 내가 원할때 실행한다 => this값만 우리가 원하는 상태로 함수 세팅해논 것 

const printCatName = printName.call(cat);  // 즉시 함수를 호출해서실행 => return 결과값 저장 
const printDogName = printName.bind(dog); // this dog로 바인딩한 함수를 저장  ==> 우리가 원할때 호출해서 실행할수있다

console.log(printCatName);
console.log(printDogName());

const printAddAll = addAll.bind(dog, 10, 20, 30);
console.log(printAddAll());