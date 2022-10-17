//Ques.1- Program to demonstrate default parameterised constructor.

//Default Constructor:-
//Default constructor is automatically created by javascript if we have not added
// any constructor method in a particular class.

class student {
  constructor() {
    this.name = "Ashutosh";
    this.brnach = "CS";
  }
}

const student1 = new student();

student1.name; // Ashutosh

//Parameterised constructor
// A constructor which have parameters in it is called parameterised constructor
// This type of constructor is mainly used when you want to initialize the
// properties of the class with some specific values.
class Car {
  constructor(brandName, model, color, type) {
    this.brandName = brandName;
    this.model = model;
    this.color = color;
    this.type = type;
  }
}

//Custom constructor in javascript.
function Car(brandName, model, color, type) {
  this.brandName = brandName;
  this.model = model;
  this.color = color;
  this.type = type;
}

const safari = new Car("TATA", "safari", "dark", "hybrid");
const innova = new Car("TOYOTA", "innova-crysta", "white", "petrol");
