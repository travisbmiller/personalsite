var express = require('express');
var app = express();
var port = 9000;

app.use(express.static(__dirname + '/client'));


app.get("/", function (req, res) {
  console.log("req");
  res.send('hello world');
});

app.listen(port, function () {
  console.log("listening on port - ", port)
});