function test() {
  console.log(this);
}

//console.log(this);
// console.log(globalThis);
// console.log("-----------");
// test();

const cat = {
  name: '나비',
  age: 10,
  callOwner: function () {
    console.log(this);
    return `집사야 ${this.name} 배고파 밥줘!`
  },
  printInfo: () => {
    console.log(this);
    return ` ${this.name} , ${this.age}`
  }
}

console.log(cat);
console.log(cat.callOwner());
console.log("--------------------")
const test2 = cat.printInfo.bind(cat)();
console.log(test2);