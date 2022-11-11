const express = require("express");
const serverConfig = require("./config/server.config");
const router = require("./routes/index");
const app = express();

//use middleware = for router
app.use(router);

app.listen(serverConfig.PORT, () => {
  console.log(`server is running at ${serverConfig.PORT}`);
});
