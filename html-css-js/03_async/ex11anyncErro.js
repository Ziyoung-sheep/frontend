// try {
//   setTimeout(() => {
//     throw new Error('에러발생!!!');
//   }, 1000)
//   // throw new Error('에러발생!!!');
// } catch (error) {
//   console.log("내가 에러 잡을꺼야!!!");
// }

// function testErrorCatch(callback, sec) {
//   if (!callback || !(callback instanceof Function)) {
//     throw new Error('콜백 함수가 아닙니다!!');
//   }
//   if (!sec || sec <= 0) {
//     throw new Error('0보다 큰 초 단위가 와야합니다');
//   }
//   setTimeout(callback, sec * 1000);
// }

// try {
//   // testErrorCatch(() => {
//   //   console.log(" 타이머 종료")
//   // }, 2);
//   // testErrorCatch();
//   testErrorCatch(() => {
//     console.log(" 타이머 종료")
//   }, -2);
// } catch (error) {
//   console.log(error)
// }

function runTimer(sec) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!sec || sec <= 0) {
        reject(new Error('0보다 큰 초 단위가 와야합니다'));
      } else {
        resolve(`${sec} 초가 지났다 타이머 종료`);
      }
    }, sec * 1000);
  })
}


runTimer(-2)
  .then(result => console.log(result))
  .catch(console.log)
  .finally(() => console.log('프로그램 종료'));