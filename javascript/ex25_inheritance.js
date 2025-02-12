class Person {
  #job;
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.#job = job;
  }

  eat() {
    console.log('먹자');
  }
  sleep() {
    console.log('자자');
  }
  printPerson() {
    console.log(this);
    console.log(this.#job);
  }
}

class Teacher extends Person {
  constructor(name, age, teacherNo) {
    super(name, age, "사람");  // new Person(name, age, "사람");
    this.teacherNo = teacherNo;
  }
  teach() {
    console.log("교육하기");
    //console.log(super.#job)
  }
}

class Student extends Person {
  constructor(name, age, stuNo, grade) {
    super(name, age, "사람");
    this.stuNo = stuNo;
    this.grade = grade;
  }
  study() {
    console.log("공부하기");
  }
  // 오버라이딩 => 부모 메서드를 자식이 재정이 하는것
  eat() {
    console.log("급식먹자");
  }
}

const kim = new Person('김씨', 20, "무직");
console.log(kim);
kim.printPerson();
const park = new Teacher('박씨', 20, '12341234');
console.log(park);
park.printPerson();
park.teach();

const lee = new Student('박씨', 20, '222222', 40);
lee.study();
lee.printPerson();
lee.eat();