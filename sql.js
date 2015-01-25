var mysql = require('mysql');
/*
 * Options object to open connection
 * host
 * user
 * password
 * port
 */
var connection = mysql.createConnection({
  host: "engr-db.engr.oregonstate.edu",
  user: "collaboratory",
  password: "WizyZu6K",
  port: "3307",
  database: "collaboratory"
}, function(err){ //err cb to check connection
  if(err){
    console.log("error: " + err);
  }
  console.log("connection created with db-engr");
  disconnect = false;
});
connection.connect(function(err, conn) {
  if(err){
    console.log('MySQL connection error: ', err);
    process.exit(1);
  }
  console.log("I am connected");
});
var queryString = "SELECT * FROM mailbox";
var userId = 1;
var columns = ['username', 'email'];
var query = connection.query(queryString, function(err, rows, fields){
  if(err){
    console.log("err: " + err);
  }
  for(var i in rows){
    console.log("Post Titles: ", rows[i].accelX);
  }
});
connection.end();

while(!disconnect){
  console.log("I am here! Haha I am connected");
  if(disconnect){
    connection.end(function(err){
      if(err){
        console.log("error: " + err);
      }
      console.log("connection terminated");
    });
  }
}
