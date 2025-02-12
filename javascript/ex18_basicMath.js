console.log(Math.random()); //무작위로 1 이하의 실수값을 가져온다
console.log(Math.random() * 10); //0-9.~~~
console.log(parseInt(Math.random() * 10)); //0-9
console.log(parseInt(Math.random() * 10) + 1); //1-10

//5-15
let num = parseInt(Math.random() * (15 - 5 + 1)) + 5;
console.log(num)

//[문제1]
//1. 랜덤값을 범위를 외부에서 가져오는 함수 한 개 getRandom(시작값, 끝값);
//2. 해당 함수를 사용해서 50~100까지 숫자를 랜덤으로 저장하고 그 수가 짝수인지 홀수인지 출력하는 checkNum함수
//3. 해당 함수를 출력하세요
console.log('===========================')
function getRandom(start, end) {
  return parseInt(Math.random() * (end - start + 1)) + start;
}

function checkNum(num) {
  if (num % 2 == 0) {
    return num + '은 짝수입니다.'
  } else {
    return num + '은 짝수가 아닙니다.'
  }
}
console.log(checkNum(getRandom(50, 100)));

// [문제2]
// 4.배열을 전부 랜덤으로 (-100~100) 사이의 숫자를 4개를 저장 후에 전부 홀수인지 검사하는 inAllOddNum 함수를 만들고
// 전부 홀수이면 전부 홀수입니다, 아니면 전부 홀수가 아닙니다를 출력하세요

// let array = [];
let array = new array(4); //칸이 4개인 배열 만들기

for (let i = 0; i < 4; i++) {
  array.push(getRandom(-100, 100));
}
console.log(array);

// every => 무조건 리턴이 false 이면 반복문 중단
// 즉 짝수면 false가 나와야 함
// 따라서 홀수인지를 검사해야함
// let array = [1, 3, 5, 8];

console.log(array.length);
function inAllOddNum(array) {
  let cnt = 0;
  res = array.every(obj => {
    cnt++;
    console.log(cnt);
    return obj % 2 == 1

  })
  if (cnt == array.length) {
    return '전부 홀수입니다.'
  } else {
    return '전부 홀수가 아닙니다.'
  }
}

console.log(inAllOddNum(array));




