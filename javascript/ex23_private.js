// 캡슐화 => private getter setter 

class Student {
  static count = 0;
  #id;    // private String id; 
  #name;
  constructor(id, name) {
    this.#id = id;
    this.#name = name;
    // this.count += 1; 객체 생성후에 객체 주소 접근  => static 변수는 이렇게 접근 불가능 
    Student.count += 1;
  }
  printInfo = () => {
    console.log(`id : ${this.#id} \t name: ${this.#name}`);
    console.log(this.#getName());
  }

  getTotalStudent = () => {
    console.log(` 총 학생은 ${Student.count}명입니다`);
  }

  #getName = () => this.#name;

  get name() {
    return this.#name;
  }
  set name(name) {
    this.#name = name;
  }

}
const stu1 = new Student("111111", 'park');
const stu2 = new Student("22222", 'kim');
const stu3 = new Student("33333", 'lee');



const stuList = [stu1, stu2, stu3];

stuList.forEach(stu => stu.printInfo());

stu1.getTotalStudent();

console.log(stu1.id); // undefined
//console.log(stu1.#getName());

stu1.id = "1234";
console.log(stu1.name);  // stu1.name()
stu1.printInfo();
stu1.name = "박연미";  // stu1.name("박연미");
stu1.printInfo();

console.log(stu1 instanceof Array);