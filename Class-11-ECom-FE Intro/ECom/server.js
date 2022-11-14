const express = require("express");
const serverConfig = require("./config/server.config");
const router = require("./routes/index");
const bodyParser = require("body-parser");
const ErrorHandler = require("./middlewares/ErrorHandler");
const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//use middleware = for router
app.use("/api/v1/", router);

//it will alwaya be in last =
app.use(ErrorHandler);

app.listen(serverConfig.PORT, () => {
  console.log(`server is running at ${serverConfig.PORT}`);
});
