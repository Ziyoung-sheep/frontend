let arr1 = [];
let arr2 = new Array();

console.log(typeof arr1);
console.log(typeof arr2);

arr1[0] = 100;
arr1[1] = 200;
arr1[3] = 300;

console.log(arr1[2] == undefined);    // empty == undefined

arr2 = new Array(5);  // new var[5];

console.log(arr2);

array = [1, '2', true, NaN, {}, [100, 20, 30, 40, 50], [], 10.1234123, undefined, null,
  function test() { console.log("hello") }
];

console.log(array);
array[array.length - 1]();

for (let i = 0; i < array.length; i += 1) {
  // console.log("index" + i + "=" + array[i])
  console.log(`index ${i} = ${array[i]}`);
}