const mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "Suppe",
  password: "olglassmedmelk"
});

con.connect(function(err){
  if (err) throw err;
  console.log("Connected!");
});
