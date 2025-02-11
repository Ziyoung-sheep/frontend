//산술연산자
console.log(10 + 3);
console.log(10 - 3);
console.log(10 * 3);
console.log(10 / 3);
console.log(10 % 3);

let intro = "박연미/n입니다.";
// 산술연산자 
console.log(10 + 3);
console.log(10 - 3);
console.log(10 * 3);
console.log(10 / 3);  // 자바 정수 / 정수 => 정수 : 자바스크립트 전부 number type( double) 3.33333..5
console.log(10 % 3);

console.log(10 ** 3); // 거듭제곱 10*10*10
console.log(Math.pow(10, 3));

console.log(2 - "test"); // NaN => not a number
console.log(10 / 0); // Infinity 

// 자바스크립트는 "" , '' 둘다 겸용으로 사용 가능하다
let intro = '박연미 \n 입니다';
console.log(intro);
intro = " '박연미' 입니다";
console.log(intro);
intro = ' "박연미" 입니다';
console.log(intro);

// `` => 스트링 템플렛 (백틱 : 숫자 1옆에 엤는 특수문자) => 외부값을 ${변수이름} 으로 넣어줄수있다 
const myName = "박연미";
const job = "강사";
intro = `저는 ${myName} 입니다 \n 직업은 ${job}입니다`;

let isDead = true;
console.log(isDead);
console.log(!isDead);
console.log(!!isDead);
console.log(!!!isDead);

//trulsy valse

console.log(!!'0');
console.log(!!true);
console.log(!!'test');
console.log(!![]);  // new Array()
console.log(!!{});  // new Object()
console.log(!!10.123);
//falesy valse
// 숫자 0 , false, 빈문자열, null, undefined 

console.log(!!0);
console.log(!!false);
console.log(!!'');
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

let cat = null;  // 비어있다라는 표시 null 표시하기!! => 비어있는 주소값

// symbol : 유일무이한 값 
const num1 = '1';
const num2 = '1';
console.log(num1 == num2);

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');
console.log(symbol1 == symbol2);
function getKeyValue1(obj, key) {
  return obj.keyl; //순수하게 obj  값에 키라는 속성값을 찾는 것: 동적으로 값을 못바꿈
}
function getKeyValue2(obj, key) {
  return obj.keyl; //순수하게 obj  값에 키라는 속성값을 찾는 것: 동적으로 값을 못바꿈
}