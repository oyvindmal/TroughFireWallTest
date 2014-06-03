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
        if(data == "something")
        {
            console.log("Doing something");
            exec("tdtool -n 4", null)
        }
//      client.destroy(); // kill client after server's response
});

client.on('close', function() {
        console.log('Connection closed');
});
