//======================================================
var util = require('util');
var fs = require('fs');
var serialport = require('serialport')
var Serial = serialport.SerialPort;
var net = require('net');
var socket = new net.Socket();
var gpio = require('rpi-gpio');
var disconnect; //state variable

//connect to the mysql server on engr-oregonstate
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

/*while(!disconnect){
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
*/
//setup gpio pins for pi
/*
var readPins = [6, 7];
var writePins = [8, 9];
gpio.setup(readPins[0], gpio.DIR_IN, readInput);

//read to a pin
function readInput(){
  gpio.read(readPins[0], function(err, value){
    if(err){
      console.log('error: ' + err);
    }
    console.log("the value(s) are: ", value);
  });
}

//Listen for Changes
gpio.on('change', function(channel, value){
  console.log("channel " + channel + "value is now " + value);
});

//destroy pins
function pause(){
  setTimeout(closePins, 2000);
}
function closePins(){
  gpio.destroy(function(){
    console.log("All pins destroyed");
    return process.exit(0);
  });
}

/*
var serialPort = new Serial("/dev/ttyUSB0", {

  baudrate: 9600, //baud rate of the xbee
    //right now delimiter is a space
    //parser: serialport.parsers.raw
    parser: serialport.parsers.raw

}, true);

//log serial port to see if pipe is good 

serialPort.on('open', function (err){
  if(err){
    console.log("err: " + err);
  }
  //opens the serial port
  console.log('serialport connected and open');
});

var ready = true

var skip = false
serialPort.on('data', function (data, error) {
  if(error !== undefined) {
    console.log(error)
  }
  if ( ready ) {
    sendData(data)
  ready = !ready
  }
});

lastEventIds = {};

function sendData(packet) {
  console.log('error at sending packet');
  var nowTime = new Date().getTime();
  var temp = packet[0];

  var dataToAdd = {

    character: packet[1],
    id:        packet[2],
    event:     packet[3]  

  };

  //don't repeatedly send a button pressed if it remains pressed
  if (lastEventIds[dataToAdd.id] == 1 && dataToAdd.event == 1) {
    console.log("event button can go");
    dataToAdd.event = 0;
  }
  console.log("again event data");
  lastEventIds[dataToAdd.id] = dataToAdd.event;

  socket.write(JSON.stringify(dataToAdd));
}

var startTime = new Date().getTime();

console.log("time constructed");
var jsonData = {
  vector: [],
};*/
