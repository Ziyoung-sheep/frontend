const dog = {
  name: "바둑이",
  age: 3,
  like: ["뼈", "인형"],
  owner: { name: "박연미" },
  sayHi: function () { console.log("왈왈왈!!") }
};

console.log(dog);
console.log(dog.name);
console.log(dog.owner.name);
console.log(dog.sayHi);
dog.sayHi();
//dog.hi();

// 얕은 복사 => 같은 주소값을 공유한다
const dog2 = dog;
dog2.name = "개똥이";

console.log(dog);
console.log("-----------");
console.log(dog2);

console.log("============");
// 깊은 복사 => 새로운 주소값을 만들어서 안에 있는 값을 전부 복사 
const dog3 = { ...dog };
dog3.name = "백구";


console.log(dog);
console.log("-----------");
console.log(dog3);

let obj = {};
let obj2 = new Object();

console.log(typeof obj);
console.log(typeof obj2);

obj.name = "테스트1";
obj2["name"] = "테스트2";

console.log(obj);
console.log(obj2);

let num = 10;
num.number = "100";
console.log(typeof num);