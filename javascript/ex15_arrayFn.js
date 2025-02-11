//고차함수: 콜백함수를 사용한다
//콜백함수는 화살표 함수로 많이 쓴다

let array = [3, 5, 8, 6, 7, 11, 15, 14, 23];
//foreach() => 배열요소 끝까지 한개씩 넣어서 실행하는 함수
//문제1) 짝수만 출력
// let array = [2, 6, 8, 4, 12, 1002];

array.forEach(element => {
  if (element % 2 == 0)
    console.log(element);
});


// function printEvenNum(n) {
//   if (n % 2 == 0) console.log(n);
// }
// array.forEach(printEvenNum);

array.forEach(n => { if (n % 2 == 0) console.log(n) });

// map() => 데이터를 받아서 새로운 값 가공 

let result = array.map(x => x * 10);
console.log(array);
console.log(result);

// filter : 조건식이 true 에만 실행 
console.log("============")
result = array.filter(val => val % 2 == 0);
console.log(result);

console.log("============")
//find 
result = array.find(val => val > 10);
console.log(result);
console.log("============")
result = array.findIndex(val => val > 10);
console.log(result);

// reduce() => 줄이다..  : 배열 => 한개의 값 : 총합, 갯수 
console.log("============")
result = array.reduce((p, n) => {
  console.log(`누적값 ${p} : 현재값 ${n}`);
  return p + n;
}, 0);
console.log(result);
console.log("============")
// 홀수의 갯수를 리턴 
result = array.reduce((cnt, val) => {
  if (val % 2 == 0) return cnt;
  else {
    console.log("val=" + val + "cnt=" + cnt)
    return cnt += 1;
  }
}, 0)
console.log("홀수의 갯수  = " + result);
