var osc = require('node-osc'),
    io = require('socket.io').listen(8081);

var oscServer, oscClient;

io.set('log level', 1);
y = [0,0,0]
queue_size = 25
queue = [0]
for (var i = 0; i < queue_size-1; i++) {
  queue.push(0);
}
c = 0
threshold = 0.40
pop_threshold = queue_size - 10

function reset(queue, queue_size) {
  for (var i = 0; i < queue_size; i++) {
    queue[i] = 0;
  }
}

io.sockets.on('connection', function (socket) {
  socket.on("config", function (obj) {
    console.log("READY!");
    oscServer = new osc.Server(obj.server.port, obj.server.host);
    oscClient = new osc.Client(obj.client.host, obj.client.port);

    oscClient.send('/status', socket.sessionId + ' connected');

    oscServer.on('message', function(msg, rinfo) {
      //console.log("Hi")
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
        if (x[i] > threshold) {
          y[i] = 1
        }
        else {
          y[i] = 0
        }
      }
      if ((y[0]+y[1]+y[2])>0) {
        queue.push(1);
        queue.shift();
        
        counter = 0
        for (var i = 0; i < queue_size; i++) {
          counter += queue[i];
        }
        if (counter > pop_threshold) {
          socket.emit("message", 1);
          console.log("pop - " + c);
          reset(queue, queue_size)
          c += 1;
        }
      }
    });
  });
  socket.on("message", function (obj) {
    oscClient.send(obj);
    console.log("cenas");
  });
});