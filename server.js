var http = require('http'),
mongo = require("mongojs");

var url = "mongodb://demo_user  , 
db = mongojs.connect(url, ["collection"]);
var server = http.createServer(requestHandler);

function requestHandler(request, response){
  response.writeHead(200, {"Content-Type": "text/html"});
  db.demo_collection.find({"color": "red"}), function(err, records){
    if(err){
      console.log("error: " + err);
      response.end();

    }
    var html = '<h2>Vehicles with a red finish</h2>',
    i = records.length;

    while(i--) {
      html += '<p><b>Name:</b> ' 
      + records[i].name 
      + ' <br /><b>Number of wheels:</b> ' 
      + records[i].wheels 
      + '<br /><b>Color: </b>' 
      + records[i].color;
    }

response.write(html);
response.end();
server.listen(8000);

