// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var methodOverride = require('method-override')
var app = express();
var bodyParser = require('body-parser');

// Specify the port.
var port = 3000;

var connection = mysql.createConnection({
host: "localhost",
port: 3306,
user: "root",
password: "root",
database: "burgers_db",
socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
});

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(port);