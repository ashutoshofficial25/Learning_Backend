const car = require("./car");
const fs = require("fs");
// import car from './car'

console.log(car);
const file = fs.readFileSync("./text.txt", "utf-8");
fs.readFileSync("./text.txt", "utf-8", function (err, data) {
  console.log(data);
});
console.log(file);
