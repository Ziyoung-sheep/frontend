// 리터럴 객체 => 오브젝트 타입
// 키 : value
let dog = {
  "name": "바둑이",
  age: 3,
  ownerName: "키티"
};
const hamster = {
  name: "푸딩",
  age: 0.3
};

// 객체 안에 속성 값 추가하기 
console.log(dog);
console.log(hamster);
dog.like = ["개껌", "뼈다귀"];
hamster["like"] = ["개껌", "뼈다귀"];
console.log(dog);
console.log(hamster);

//객체안에 속성 값 삭제하기 

dog.ower = '제임스';
console.log(dog);

delete dog.ower;
delete dog['age'];

console.log(dog);

// 객체타입 ['속성이름'] 값 접근하는 이유 

function getKeyValue1(obj, key) {
  return obj.key;   // 순수하게 obj 값에 "key" 라는 속성값을 찾는것 : 동적으로 값을 못바꿈
}

function getKeyValue2(obj, key) {
  return obj[key];  // key 라고하는 변수에 값으로 접귾한다 
}

console.log(getKeyValue1(dog, "name"));
console.log(getKeyValue2(dog, "name"));