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
pop_threshold = queue_size - 10;
Calibrate = true;
virtualZeroHeading = 0;

function reset(queue, queue_size) {
  for (var i = 0; i < queue_size; i++) {
    queue[i] = 0;
  }
}

function calcDrumPart(heading) {
  if (heading > 0) {
    // 1 && 2
    if (heading < 30) {
      return 2;
    }
    else {
      return 1;
    }
  }
  else {
    // 3 && 4
    if (heading > -30) {
      return 3;
    }
    else {
      return 4;
    }
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
      heading = parseInt(msg.splice(16,1))
      
      let virtualHeading = 0;

      if (Calibrate == true) {
        virtualZeroHeading = -heading;
        Calibrate = false;
      }
      else {
        virtualHeading = heading + virtualZeroHeading;
        if (virtualHeading > 180) {
          virtualHeading -= 180;
        }
      }
      console.log(heading + "      " + virtualHeading)

      //string = ""
      //for (var i = 0; i < 3; i++) {
      //  k[i] = k[i].toFixed(2);
      //  //x[i] = Math.round(x[i]);
      //  if (k[i] > 0) {
      //    string += " ";
      //  }
      //  string += k[i].toString() + " "
      //}
      //console.log(string)

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
          drum_part = calcDrumPart(virtualHeading);
          socket.emit("message", drum_part);
          console.log("pop - " + c);
          reset(queue, queue_size)
          c += 1;
        }
      }
    });
  });
  socket.on("message", function (obj) {
    oscClient.send(obj);
  });
});