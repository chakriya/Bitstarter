var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var buffer1 = new Buffer(102600000);
var len = buffer1.write(fs.readFileSync('indexANSWER.html','utf-8'));

//var len = buffer1.write("str1");

app.get('/', function(request, response) {
  response.send(buffer1.toString('utf-8',0,len));
// response.send("test");
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
