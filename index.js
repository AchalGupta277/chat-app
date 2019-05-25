var express = require("express");
var socket = require("socket.io");
var app = express();
var PORT = process.env.PORT || 4000;
var server = app.listen(PORT, function() {
  console.log("app running");
});

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Welcome to crush");
});

// socket setup

// var io = socket(server);

// io.on("connection", function(socket) {
//   console.log(socket.id);

//   socket.on("chat", data => {
//     io.sockets.emit("chat", data);
//   });

//   socket.on("typing", function(data) {
//     socket.broadcast.emit("typing", data.handle);
//   });
// });
