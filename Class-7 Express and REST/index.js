const express = require("express"); //got access to application
const app = express(); // get access to express() function
const bodyParser = require("body-parser");

let users = [
  {
    id: 123,
    name: "Ashutosh",
  },
  {
    id: 124,
    name: "Ashu",
  },
];

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).json(users);
  res.end();
});

app.get(/^\/user\/(\d+)$/, (req, res) => {
  const userId = req.params[0];

  let foundUser = users.find((user) => {
    return user.id == userId;
  });
  console.log(foundUser);
  res.status(200).json(foundUser);
  res.end();
});

app.post("/user", (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(200).json(users);
  res.end();
});

app.listen(8080, () => {
  console.log("Server started!");
});
