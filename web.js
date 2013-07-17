var express = require('express');

var app = express.createServer(express.logger());

var buffer1 = new Buffer(1026);
//fs.readFileSync('index.html', function(err,data){
//if (err) throw err;
//console.log(data);});
var len = buffer1.write("str1");

app.get('/', function(request, response) {
  response.send(buffer1.toString('utf-8',0,len));
// response.send("\n" + data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
