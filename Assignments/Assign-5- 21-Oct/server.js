const http = require("http");

let server = http.createServer((req, res) => {
  res.write("Hello from server! Assignment Completed");
  res.end();
});

let port = 8448;
server.listen(port, () => {
  console.log(`Server started on ${port}`);
});
