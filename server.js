//======================================================
var outfile = './data.json';
var util = require('util');
var fs = require('fs');
var http = require('http');
var app = require('express')();
var serialport = require('serialport')
var Serial = serialport.SerialPort;
var out = fs.createWriteStream(outfile, {'flags': 'w'});
var net = require('net');
var socket = new net.Socket();

var port = 80;
socket.connect(port);

var maxWait = 5000;

var serialPort = new Serial('/dev/ttyUSB0', {

    baudrate: 38400, //baud rate of the xbee
    //right now delimiter is a space
    
    parser: serialport.parsers.raw

}, true);

//log serial port to see if pipe is good 
function cb(){
  console.log("calling back");
}

serialPort.on('open', function(err) { //opens the serial port
  
  if(err){
    console.log("Error: ", err);
  }
  console.log("open");
});

var ready = true;
socket.on('data', function(data, error){
  
  if(data.toString() == 'ok'){
    ready = true;
  }

});

var skip = false;
serialPort.on('data', function (data, error) {
  if(error){
    console.log("Error: ", error);
  }
  console.log(data);
  if (ready){
    writeDrain(data, cb);
    ready = !ready;
  }
});

var lastEventIds = {};

function writeDrain(data, cb) {
  
 var nowTime = new Date().getTime();
  var dataToAdd = {
      id:      packet[0],
      event:   packet[1],
      Xh:      packet[2],
      Xl:      packet[3],
      Yh:      packet[4],
      Yl:      packet[5],
      Zh:      packet[6],
      Zl:      packet[7]
  };
  
  socket.write(JSON.stringify(dataToAdd));

  serialPort.write("data" + dataToAdd, function(err){
    
    if(err){
      console.log("error: " + err);
    }
  });

  serialPort.pause();

  serialPort.flush(function(){
    console.log("flushed");   
    
    setTimeout(function(){
      console.log("\n");
      serialPort.resume();
    }, 500)
  })
}

console.log('Server running on localhost:' + port);

var startTime = new Date().getTime();

var jsonData = {
  vector: [],
};


