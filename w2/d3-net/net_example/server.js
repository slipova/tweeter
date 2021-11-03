const net = require('net');

const server = net.createServer();

server.on('connection', (client) => {
  client.setEncoding('utf8'); // interpret data as text
  client.on('data', (data) => {
    console.log('Message from client: ', data)
  });
  console.log('New client connected!');
  client.write('MESSAGE');

});



server.listen(3000, () => {
  console.log('Server listening on port 3000!');
});


