var net = require('net');

var http = require('http');

var server = net.createServer(function (socket) {
  socket.write('Echo server\r\n');
  console.log(server.address());
  http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
  
  socket.write("something");
}).listen(80);

  socket.pipe(socket);
});

server.listen(5000);

