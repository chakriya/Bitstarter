var express = require('express');

var app = express.createServer(express.logger());

var buffer1 = new Buffer(256);
buffer1 = readFileSync('index.html');

app.get('/', function(request, response) {
  response.send(buffer1.toString('utf-8',0,buffer1.length));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
