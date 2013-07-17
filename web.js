var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var buffer1 = new Buffer(1026);
buffer1 = fs.readFileSync('index.html');

//var len = buffer1.write("str1");

app.get('/', function(request, response) {
  response.send(buffer1.toString('utf-8',0,256));
// response.send("\n" + data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
