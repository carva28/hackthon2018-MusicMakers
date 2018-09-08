var osc = require('node-osc'),
    io = require('socket.io').listen(8081);

var oscServer, oscClient;

io.set('log level', 1);
y = [0,0,0]
count = 0

io.sockets.on('connection', function (socket) {
  socket.on("config", function (obj) {
    oscServer = new osc.Server(obj.server.port, obj.server.host);
    oscClient = new osc.Client(obj.client.host, obj.client.port);

    oscClient.send('/status', socket.sessionId + ' connected');

    oscServer.on('message', function(msg, rinfo) {
      x = msg.splice(4,3);
      //string = ""
      //for (var i = 0; i < 3; i++) {
      //  x[i] = x[i].toFixed(2);
      //  //x[i] = Math.round(x[i]);
      //  if (x[i] > 0) {
      //    string += " ";
      //  }
      //  string += x[i].toString() + " "
      //}
      for (var i = 0; i < 3; i++) {
        if (x[i] < 0) {
          x[i] = -x[i];
        }
        if (x[i] > 0.5) {
          y[i] = 1
        }
        else {
          y[i] = 0
        }
      }
      if ((y[0]+y[1]+y[2])>0) {
        console.log(y + " - "+count);//, rinfo);
        count += 1;
      }
      socket.emit("message", [y, [0]]);
    });
  });
  socket.on("message", function (obj) {
    oscClient.send(obj);
  });
});