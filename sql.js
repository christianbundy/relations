var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "engr-db.engr.oregonstate.edu",
    user: "collaboratory",
    password: "WizyZu6K", 
    port: "3307"

}, function(err){
  if(err){
    console.log("error: " + err);
  }
  console.log("actually connected");
});

connection.connect(function(err, conn) {
  if(err){
    console.log('MySQL connection error: ', err);
    process.exit(1);
  }
  console.log("I am connected");
});

console.log("connected");

connection.end(function(err){
  if(err){
    console.log("error: " + err);
  }
  console.log("connection terminated");
});

