// Make connection

var socket = io.connect("https://krussh.herokuapp.com/");

// Query DOM
var message = document.getElementById("message"),
  handle = document.getElementById("handle"),
  btn = document.getElementById("send"),
  output = document.getElementById("output");
feedback = document.querySelector("#feedback");
//Emit events

btn.addEventListener("click", function() {
  socket.emit("chat", {
    message: message.value,
    handle: handle.value
  });
});

message.addEventListener("keypress", function() {
  socket.emit("typing", {
    handle: handle.value
  });
});

socket.on("chat", function(data) {
  feedback.innerHTML = "";
  output.innerHTML += `${data.handle} : ${data.message}<br>`;
});

socket.on("typing", function(data) {
  feedback.innerHTML = `${data} is typing ..`;
});
