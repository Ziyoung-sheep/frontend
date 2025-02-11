function printArray(start, end) {
  if (!isNaN(start) && !isNaN(end)) {
    let temp = [];
    if (start != end) {
      if (start > end) {
        let tempNum = start;
        start = end;
        end = tempNum;
      }
      for (let i = start; i <= end; i++) {
        temp.push(i);
      }
    } else {
      temp.push(start);
    }
    console.log(temp);
  } else {
    console.log('숫자값을 넣어주세요');
  }
}

printArray(5, 5);
printArray(1, 5);
printArray(6, 15);
printArray(15, 4);
printArray('test', 4);
let test = [1, 2, 3, 4, 5, 5, 6, 6, 7]
console.log(test);