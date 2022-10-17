//Program to demonstrate timing event in javascript

setTimeout(() => {
  clearInterval(intrval);
}, 5000);

let intrval = setInterval(() => {
  foo("Ashutosh");
}, 500);

const foo = (name) => {
  console.log(name);
};
