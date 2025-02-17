const cat = {
  name: '나비',
  age: 4,
  play: () => { console.log('낚시줄 놀이') },
  owner: { name: '박연미' },
  favorite: ['캣잎', '잠자기', '츄르']
}

console.log(cat);

// 객체 -> json 파일(텍스트형식 문자 포멧 ) 변환 

// 주의사항 => 객체안에 함수값이 있을땐 그 함수값은 문자열에서 제외된다;
let jsonData = JSON.stringify(cat);
console.log(jsonData);

// 서버 값을 전송  json 파일 -=> js 객체
// json 파일 => js 객체 변환 
let obj = JSON.parse(jsonData);
console.log(obj);

console.log("----------------");

jsonData = JSON.stringify([cat, cat, cat, cat]);
console.log(jsonData);

obj = JSON.parse(jsonData);
console.log(obj);