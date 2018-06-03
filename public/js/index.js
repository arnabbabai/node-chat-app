  var socket = io();

  socket.on('connect',function () {
    console.log('connected to server');
  });
  socket.emit('createMessage', {
    from:'arnab',
    text:'hey there'
  });
  socket.on('disconnect',function () {
    console.log('disconnected user');
  });

  socket.on('newMessage', (message) => {
    console.log('new message',message);
  });
