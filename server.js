var net = require('net');

var http = require('http');

var server = net.createServer(function (socket) {
  socket.write('Echo server\r\n');
  console.log(server.address());
  http.createServer(function (req, res) {
     var params = req.url.substring(1).split('/');
     
      var controllerName = params[0];

        if(controllerName == 'telldus')
        {
              var command = params[1];
            var swid = params[2];
            if(command == 'on')
            {
                res.end("Turning it on \n");
                socket.write("Telldus/On/" + swid)
            }

            if(command == 'off')
            {
                res.end("Turning it off \n");
                socket.write("Telldus/Off/" + swid)
            }

        }
        
          else {
            var obj = { type: 'Error', message : 'invalid'};
            res.end(JSON.stringify(obj));

        }
}).listen(80);

  socket.pipe(socket);
});

server.listen(5000);

