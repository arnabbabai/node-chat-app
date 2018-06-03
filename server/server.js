const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
var publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection',(socket) => {
  console.log('new user connected');

  socket.on('createMessage', (message) => {
    console.log('create message',message);
    io.emit('newMessage', {
      from:message.from,
      text:message.text
    });
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(port, () => {
  console.log(`app running on port ${port}`);
});
