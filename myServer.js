//======================================================
var util = require('util');
var fs = require('fs');
var serialport = require('serialport')
var Serial = serialport.SerialPort;
var net = require('net');
var socket = new net.Socket();
var gpio = require('rpi-gpio');
var disconnect; //state variable
var mongo = require('mongojs')


//connect to the mongo-db database

var connectionString = "mydb"
var db = mongojs(connectionString)
var myCollection = db.collection('mycollection');

db.myCollection.find().sort({name:1}, function(err, docs){
  if(err){
    console.log("Error: ", err);
  }
  console.log(docs);
}

/
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
