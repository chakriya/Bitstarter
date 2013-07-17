var express = require('express');

var app = express.createServer(express.logger());

var buffer1 = new Buffer(1026);
//var str1 = readFileSync('index.html');
var len = buffer1.write("this is a test");

app.get('/', function(request, response) {
  response.send(buffer1.toString('utf-8',0,len));
// response.send("\n" + str1);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
