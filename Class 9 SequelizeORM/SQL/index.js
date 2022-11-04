let mysql = require("mysql");

const dbConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Mysql@shu1",
  database: "ecom",
});

dbConnection.connect((error) => {
  if (error) {
    console.log(error);
    throw new Error(error);
  }
  console.log("database connected");

  dbConnection.query("select * from product", (err, data) => {
    if (err) {
      throw err;
    }
    console.log(data);
  });
});
