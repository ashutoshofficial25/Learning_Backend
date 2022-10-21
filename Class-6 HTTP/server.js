let http = require("http");
let server = http.createServer((req, res) => {
  res.write("Hii from server!");
  let user = {
    name: "Ashutosh",
  };

  res.write(JSON.stringify(user));
  res.end();
});
server.listen(8080, () => {
  console.log("server started");
});
