
//명시적 타입 변환 => 강제적 타입 변환
//말하지 않아도 자동으로 타입을 변환해준다.

console.log('1' + 2); //연결연산자
console.log(+'1' + 2); //덧셈
console.log(1 + true); //true는 1, false는 0
console.log(1 + null); //null도 0으로 취급
console.log(1 + undefined); //NaN(Not a number) 출력
console.log(1 + ''); //문자 1
console.log('1' * 1); //숫자 1
console.log(!!'') //false
console.log(!!'X') //true

//묵시적 타입 변환 => 자동 변환 타입
console.log(Boolean('')); //false 출력
console.log(Boolean('X')); //true 출력
console.log(Boolean(1)); //true
console.log(Boolean('false')); //true
console.log(Boolean(NaN)); //false
console.log(Boolean(Infinity)); //true
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean({})); //true
console.log(Boolean([])); //true : new array로 주소값이 존재하는 상태
//JS 기초 문법에서 boolean에 넣었을 때 true로 인지하는 자료형과 false로 인지하는 자료형 체크하기

console.log('1' == 1) //true : 묵시적 변경
console.log('1' === 1) //false
console.log(NaN === NaN) //false 출력 개발 단계에서 막아둠
console.log(inNaN(NaN)) //true 상단이 안되서 만들어둔 것
console.log(inNaN(Infinity)) //false

let str = '박연미';
console.log(str[0], str.length);
str[0] = '김';
console.log(str); //박연미 출력: 문자열은 읽기 전용 배열, 중간 값 하나만 수정할 수 없음.

//따라서 김연미로 수정하고 싶으면 전체를 재할당
str = '김연미';
//부분만 수정하고 싶으면 문자열을 배열로 만들어서 진행
str = ['박', '연', '미'];
str[0] = '김';
console.log(str);
