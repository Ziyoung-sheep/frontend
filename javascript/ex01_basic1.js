let num;
console.log(num);
console.log(typeof num);
num = 10;
console.log(typeof num);
num = "test"
console.log(typeof num);
num = [];
console.log(typeof num);
num = { name: "test" };
console.log(typeof num);
num = 10.123;
console.log(typeof num);

// let 키워드 생략해도 오류 안뜸
age = 100;
console.log(age);
// constant => 상수 : 변하지 않는 수 
const myName = "박연미";        // final String myName = "박연미";
console.log(myName);
myName = "개똥이";
console.log(myName);