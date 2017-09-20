var mysql = require('mysql');

// var PORT = process.env.PORT || 3000;

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'secret',
	database: 'burgers_db',
	socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;