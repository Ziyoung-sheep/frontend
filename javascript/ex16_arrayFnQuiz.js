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

result = pets.map(x => {

});
console.log(result)

