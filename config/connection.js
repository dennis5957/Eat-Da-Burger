// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "",
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error(`Not Connected, Error: ${err.stack}`);
    return;
  }
  console.log(`Connected, Thread ID: ${connection.threadId}`);
});

// Export connection for our ORM to use.
module.exports = connection;