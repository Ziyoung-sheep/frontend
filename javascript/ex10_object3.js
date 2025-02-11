// 자바스크립트 : 객체, 함수

// 함수 : 일반 값처럼 사용 가능하다 

// 함수와 메서드(객체 안에 있는 함수를 메서드 )

function sayHi() {
  console.log(" hi");
}
sayHi();

let dog = {
  name: "바둑이",
  age: 4,
  owner: { name: "제임스" },

  callOwner: function () {
    console.log(`${this.owner.name}야 놀아줘~!!`);
  }
}

dog.callOwner();

let nameKey = "name";
let nameValue = "흰둥이"
let ageKey = "age";
let ageValue = 3;

const dog2 = {
  [nameKey]: nameValue,
  [ageKey]: ageValue
}

console.log(dog2);

//객체 안에 있는 모든 keys값 가져오기 
console.log(Object.keys(dog2));
//객체 안에 있는 모든 values값 가져오기 
console.log(Object.values(dog2));

const name = "바니";
const age = 2;
const toy = ['당근', '나무뿌리', '챗바퀴'];

// const rabbit = {
//   'name': name,
//   'age': age,
//   'toy': toy
// }
// console.log(rabbit);

const rabbit = {
  name, age, toy
}
console.log(rabbit);