//Assignment-1 Question-1

const fs = require("fs");

//Reading Operation in nodeJS
fs.readFile("./text.txt", "utf-8", function (err, data) {
  if (!err) {
    console.log(data);
  } else {
    console.log(err);
  }
});

//Writing Operation in nodejs.
let data = "Hello!, This data is written by nodejs.";

fs.writeFile("./text.txt", data, function (err, data) {
  if (!err) {
    console.log("File written Successfully");
  } else {
    console.log(err);
    ``;
  }
});
