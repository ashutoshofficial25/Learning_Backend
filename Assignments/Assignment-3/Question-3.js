//Question-3: Program to demonstrate asyncronous and syncronous functions

const students = (names) => {
  for (let i = 0; i < names.length; i++) {
    console.log(`Student ${i}: ${names[i]}`);
  }
};
const teachers = (names) => {
  for (let i = 0; i < names.length; i++) {
    console.log(`Student ${i}: ${names[i]}`);
  }
};

let studentsName = ["Ashu", "Krish", "Some"];
let parentsName = ["Teach", "Mohd", "Thing"];

//Synchronous
students(studentsName);
parents(parentsName);

//asynchoronous

const networkRequest = () => {
  setTimeout(() => {
    console.log("Async Code");
  }, 2000);
};
console.log("Hello World");
networkRequest();
console.log("The End");
