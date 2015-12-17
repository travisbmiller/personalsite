var express = require('express');
var app = express();
var port = 9000;
app.get("/", function (req, res) {
  console.log("req");
  res.send('hello world');
});

app.listen(port, function () {
  console.log("listening on port - ", port)
});