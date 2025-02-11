const day = 3;
let strDay = '';
switch (day) {
  case 0: strDay = "일요일"; break;
  case 1: strDay = "월요일"; break;
  case 2: strDay = "화요일"; break;
  case 3: strDay = "수요일"; break;
  case 4: strDay = "목요일"; break;
  case 5: strDay = "금요일"; break;
  default: strDay = "토요일";
}
console.log(day);
console.log(strDay);

let i = 1;
let result = '';
while (i <= 10) {
  result += i + " ";
  i += 1;
}
console.log(result);

i = 100;
do {
  if (i == 99) {
    i -= 1;
    continue;
  }
  console.log(i);
  if (i == 95) {
    break;
  }
  i -= 1;

} while (i > 90);

let array = [10, 20, 30, 40, 50, 60];

for (let i = 0; i < array.length; i += 1)
  console.log(array[i]);

console.log("------------------------")

// for - in :  key를 출력하는 for문  , 객체 key => 속성이름 , 배열 key => index 

for (let i in array)
  console.log(array[i]);

console.log("------------------------")

// for - of : iterable 한 객체만 사용할 수 있다
//  => looping 되는 타입만 가능하다 => 객체는 사용불가능 : 자바의 향상된 for문

for (let i of array)
  console.log(i);

console.log("------------------------")

let dog = {
  name: '바둑이',
  age: 5,
  owner: {
    name: "박연미"
  }
}

for (let key in dog) {
  console.log(`key = ${key} value= ${dog[key]}`);
}

// for (let key of dog) {  //TypeError: dog is not iterable
//   console.log(key);
// }