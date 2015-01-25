var net = require('net');
var mysql = require('db-mysql');
var dataBase = mysql.Database;
var fs = require('fs');
var sql = require('mysql');  

fs.readFile(output.txt, UTF-8, function(err, data){
  
  if(err){
   return console.log('error opening file: '+ error);
  }
  console.log("Read through the entire output file", + data);
});
var serialport = require("serialport").SerialPort;
var serialPort = new SerialPort("/dev/ttyUSB0", {
  baudrate: 9800, 
  parser: serialport.parsers.raw

new dataBase({
  hostname: 'localhost', 
  user: 'user',
  password: 'auth',
  database: 'dbEngine'
});

dataBase.on('error', function(error){
  console.log('error: ' + error);
})

dataBase.on('ready', function(server){
  console.log('connected to: ' + server.hostname + ' (' + server.version + ')');
})

dataBase.connect(function(error){
  if(error){
    console.log('error on connect: ' + error);
  }
  this.query('SELECT * FROM ', this.name('USER')).execute(function(error, rows, cols){
    
    if(error){
      console.log('error on select: ' + error);
      return;
    }
    response.writeHead(200, {'content-type': 'text/plain'});
    response.write(JSON.stringify(rows));
    response.end();
  });
});  
    

var client = net.connect({port : 8000}, function(){ //connect listener
  console.log("connected");
  client.write('world!\n')
});

client.on('data', function(data){
  console.log(data.toString());
  client.end();
});

client.on('end', function(){
  console.log('disconnected from server');
});

