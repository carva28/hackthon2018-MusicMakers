socket = io.connect('http://127.0.0.1', { port: 8081, rememberTransport: false});
console.log('oi');
socket.on('connect', function() {
    // sends to socket.io server the host/port of oscServer
    // and oscClient
    socket.emit('config',
        {
            server: {
                port: 8888,
                //host: '127.0.0.1'
                host: '192.168.1.102'
            },
            client: {
                port: 3334,
                host: '127.0.0.1'
            }
        }
    );
});

socket.on('message', function(obj) {
    var status = document.getElementById("status");
    status.innerHTML = obj[0];
    //console.log(obj);
});