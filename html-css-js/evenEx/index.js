const body = document.querySelector('body');
const vartical = document.querySelector('.vartical');
const horizontal = document.querySelector('.horizontal');
const img = document.querySelector('img');
const span = document.querySelector('span');

//다큐멘트에다가도 이벤트가 걸리네????
// document.addEventListener('mousemove', (e) => {
body.addEventListener('mousemove', (e) => {
  let x = e.clientX; //x축값
  let y = e.clientY; //y축값
  // 통채로 바꾸는 코드 css.Text
  // 근데 왜 color은 안바뀌지??
  // img.style.cssText = "left:" + x + "px;" + "top:" + y + "px;"
  img.style.left = x + 'px';
  img.style.top = y + 'px';
  // span.style.cssText = "left:" + x + "px;" + "top:" + y + "px;"
  span.style.left = x + 'px';
  span.style.top = y + 'px';
  // span.innerHTML = 'X:' + x + ' Y:' + y;
  span.innerHTML = 'X:' + Math.floor(x / (window.innerWidth / 100)) + ' Y:' + Math.floor(y / (window.innerHeight / 100));
  // vartical.style.cssText = "left:" + x + "px;"
  vartical.style.left = x + 'px';
  // horizontal.style.cssText = "top:" + y + "px;"
  horizontal.style.top = y + 'px';
})

// window.screenTop //: 상단으로부터 브라우저 위치
// window.screenLeft //: 왼쪽으로부터 브라우저 위치

// window.innerWidth //: 브라우저 화면의 너비(viewport)
// window.innerHeight //: 브라우저 화면의 높이(viewport)

// window.outerWidth //: 브라우저 전체의 너비(메뉴, 툴바, 스크롤바 포함)
// window.outerHeight //: 브라우저 전체의 높이(메뉴, 툴바, 스크롤바 포함)