// 배열 활용 함수들 ... 

let fruit = ['바나나', '사과', '포도', "딸기", '샤인머스켓', '사과'];

console.log(fruit.length);
console.log(fruit.indexOf('사과'));
console.log(fruit.includes('용과'));

// 배열 자체 수정 함수 

// 배열 요소 추가 
fruit.push('망고');
console.log(fruit);

fruit.push('수박', '멜론', '용과');
console.log(fruit);

fruit.unshift('복숭아');
console.log(fruit);

// 배열 요소 삭제 


console.log(fruit.pop())
console.log(fruit);

console.log(fruit.shift())
console.log(fruit);

// 배열 자르기 (시작인덱스 , 끝인덱스 -1 )
console.log(fruit.slice(4));
console.log(fruit);

// 새로운 배열 만드는 함수 

fruit = ['바나나', '사과', '포도', "딸기", '샤인머스켓', '사과'];

let addFruit = ['망고'];
let temp1 = addFruit.concat(fruit);
console.log(temp1);

let temp2 = [...fruit, ...addFruit];
console.log(temp2);

console.log(temp2.join());
console.log(temp2.join('/'));

let temp3 = [...fruit].sort();
console.log(temp3);
temp3[0] = '망고';
console.log(fruit);

let temp4 = [1, 9, 4, 7, 3, 100];
let temp5 = [...temp4].sort((a, b) => a < b ? -1 : 1);
console.log(temp5);
console.log(temp5.reverse());