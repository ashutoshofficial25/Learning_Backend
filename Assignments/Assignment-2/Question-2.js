//Question-2 Programm to demonstrate different ways of creating objects.

//method 1: Object Literal
let student = {
  name: "Ashutosh",
  age: 22,
  gender: "Male",
};

//Method-2: Object.create() method

let object2 = Object.create(student);
console.log(object2);
console.log(object2.name);

//Method-3: Using new keyword
let object3 = new Object();

//Method-4: Using constructor method
class Employee {
  constructor(name, email, number) {
    this.name = name;
    this.email = email;
    this.number = number;
  }
}

const employee1 = new Employee("Ashutosh", "ashu@g.c", 8457125478);
