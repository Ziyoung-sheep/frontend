let cat = {
  kind: '고양이',
  age: 5
};
let dog = {
  kind: '개',
  age: 4
};
let rabbit = {
  kind: '토끼',
  age: 0.5
};
let hamster = {
  kind: '햄스터',
  age: 1,
  eat: function () {
    console.log('해바라기씨를 먹는다 ')
  }
};


let pets = [cat, dog, rabbit, hamster, cat];

// 1. 동물의 kind 가 개 인것을 찾아라
result = pets.find(e => e.kind == '개');
console.log(result);

// 2. 동물의 kind 가 고양이가 아닌것만 빼서 배열로 만들어라

result = [];
pets.forEach(e => {
  if (e.kind != '고양이') result.push(e);
});
console.log(result);

// result = array.filter(e => e.kind != '고양이');
// console.log(result);

// 3. 총 동물의 평균 나이를 구해라 => 총합 => 갯수로 나눠기

let total = 0;
pets.forEach(e => total += e.age);
let avg = total / pets.length;
// console.log(total)
// console.log(pets.length)
console.log('동물의 평균 나이: ' + avg)


// 4.동물 나이순으로 내림차순 정렬 : 기존 배열 건드리지 않는다


let pets = [cat, dog, rabbit, hamster, cat];

// 1. 동물의 kind 가 개 인것을 찾아라
let res = pets.find(obj => obj.kind === '개');
console.log(res);

// 2. 동물의 kind 가 고양이가 아닌것만 빼서 배열로 만들어라
res = pets.filter(obj => obj.kind !== '고양이');
console.log(res);

// 3. 총 동물의 평균 나이를 구해라 => 총합 => 갯수로 나눠기
res = pets.reduce((sum, obj) => sum + obj.age, 0);
console.log(res / pets.length, '살');

// 4.동물 나이순으로 내림차순 정렬 : 기존 배열 건드리지 않는다 
res = [...pets].sort((obj1, obj2) => obj1.age > obj2.age ? -1 : 1);
console.log(res);




// some , every 

// some => 무조건 리턴이 true이면 반복문 중단

console.log("----some----")
// 개가 있으면 true 
let cnt = 0;
res = pets.some(obj => {
  cnt++;
  return obj.kind === '개'
})

console.log(res);
console.log(cnt);

console.log("----every----")
// every => 무조건 리턴이 false 이면 반복문 중단
cnt = 0;
res = pets.every(obj => {
  cnt++;
  return obj.kind === '개';
})
console.log(res);
console.log(cnt);

console.log("----forEach----")
cnt = 0;
// 매번 요소마다 함수를 호출하기때문에 반복문 중간에 멈출 수 없다 : 무조건 첨 - 배열요소 끝까지 한다
pets.forEach(obj => {
  cnt += 1;
  if (obj.kind === '개') return true;
  // console.log("test");
})

console.log(cnt);



//some => 무조건 하나라도 그 값이 존재하면 즉시 종료 결과는 true로 출력
//for each로 돌리면 원하는 값을 찾아도 무조건 다 돌기 때문에 중간에 값을 찾으면 종료하고 싶을 때 사용


