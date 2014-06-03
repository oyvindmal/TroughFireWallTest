var exec = require('child_process').exec;
var net = require('net');

var client = new net.Socket();
client.connect(5000, 'dhgw.cloudapp.net', function() {
        console.log('Connected');
        client.write('Hello, server! Love, Client.');
        setInterval(function () { client.write("Heartbeat")}, 5000);
});

client.on('data', function(data) {
        console.log('Received: ' + data);
        var params = data.toString().split("/");
        console.log(params);
         var controllerName = params[0];

        if(controllerName === 'Telldus')
        {
            var command = params[1];
            var swid = params[2];
            if(command === 'On')
            {
                console.log("Turning on");
                exec("tdtool -n " + swid, null);
            }

            if(command === 'Off')
            {
                 console.log("Turning off");
                exec("tdtool -f " + swid, null);
            }
            
        }
//      client.destroy(); // kill client after server's response
});

client.on('close', function() {
        console.log('Connection closed');
});
