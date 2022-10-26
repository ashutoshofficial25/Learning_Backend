const express = require("express"); //got access to application
const app = express(); // get access to express() function

let logTime = (req, res, next) => {
  console.log("Requested time is: ", Date.now());
  next();
};

app.use(logTime);
app.get("/", (req, res) => {
  res.write("Basc route");
  res.end();
});

app.listen(8080, () => {
  console.log("Server started!");
});
