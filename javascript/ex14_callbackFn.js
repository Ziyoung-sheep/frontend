// 콜백 함수 => 이벤트 처리할때 콜백함수 많이 씀

// 콜백함수 => callback() : 나중에 부른다 : 함수를 호출하는 주체를 남(다른함수)에게 나를 호출할 권한 넘겨줌

function sayHi(name) {
  console.log("hi " + name + "~!!! ");
}
//sayHi("박연미");

function intro(name, callback) {
  callback(name);
}

intro("개똥이", sayHi);

let array = [3, 5, 8, 6, 7, 11, 15, 14, 23];

//let printAll = function (n) { console.log(n) };
//array.forEach(printAll);

array.forEach(n => console.log(n));