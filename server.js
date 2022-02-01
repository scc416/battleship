const cli = require("nodemon/lib/cli");

const io = require("socket.io")({
  cors: {
    origin: ["http://localhost:3000"],
  },
});

const clients = {};
const getKeys = () => Object.keys(clients);

io.on("connection", (socket) => {
  const keys = getKeys();
  for (let i = 0; i < keys.length; i++) {
    const otherSocket = clients[keys[i]];
    if (!otherSocket) {
      clients[keys[i]] = socket.id;
      clients[socket.id] = keys[i];
      i = keys.length;
    }
  }
  const newKey = getKeys();
  if (!newKey.includes(socket.id)) {
    clients[socket.id] = null;
  }

  console.log("clients", clients);

  socket.on("disconnect", () => {
    console.log(`disconnect: ${socket.id}`);
    const otherSocket = clients[socket.id];
    if (otherSocket) clients[otherSocket] = null;
    delete clients[socket.id];
    console.log("clients", clients);
  });
});

io.listen(3001);
