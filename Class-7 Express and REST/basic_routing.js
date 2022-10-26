let http = require("http");

let server = http.createServer((req, res) => {
  switch (req.url) {
    case "/grocery":
      res.write("This is grocery store");
      break;
    case "/clothing":
      res.write("this is clothing store");
      break;
    default:
      res.write("home page");
  }
  res.end();
});

server.listen(8080, () => {
  console.log("server started");
});
