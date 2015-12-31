var express = require('express');
var favicon = require('serve-favicon');

var app = express();
var port = 9000;

app.use(express.static(__dirname + '/client'));
app.use(favicon(__dirname + '/client/favicon/favicon.ico'));

app.get("/", function (req, res) {
  console.log("req");
  res.send('hello world');
});

app.listen(port, function () {
  console.log("listening on port - ", port)
});