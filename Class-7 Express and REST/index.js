const express = require("express"); //got access to application
const app = express(); // get access to express() function

app.get("/", (req, res) => {
  res.status(200).json({
    status: "Success",
    name: "Ashutosh Maurya",
  });
});

app.get("/grocery", (req, res) => {
  res.status(200).json({
    status: "Success",
    name: "Grocery Store",
  });
});

app.get("/clothing", (req, res) => {
  res.status(200).json({
    status: "Success",
    name: "This is cloth store",
  });
});

app.get("/user", (req, res) => {
  res.status(200).json({
    status: "Success",
    name: "This is cloth store",
  });
});

// app.get("/user/:userId", (req, res) => {
app.get(/^\/user\/(\d+)$/, (req, res) => {
  const userId = req.params[0];
  res.status(200).json({
    status: "Success",
    name: `This is user ${userId}`,
  });
});

app.listen(3000, () => {
  console.log("Server started");
});
