class Pet {

  constructor(kind, name, age) {
    this.kind = kind;
    this.name = name;
    this.age = age;
  }

  prinInfo = () => {
    let str = ` kind = ${this.kind} \t name = ${this.name} \t age = ${this.age}`;
    console.log(str);
  }
}


let cat = new Pet('고양이', '나비', 2);
let dog = new Pet('개', '바둑이', 5);
let hamster = new Pet('햄스터', '모찌', 0.2);

console.log(cat);
console.log(dog);
console.log(hamster);

// let test = () => {
//   this.name1 = "무명이";
//   this.age = 10;
// }

// let test2 = new test();