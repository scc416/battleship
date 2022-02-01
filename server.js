const { addClient } = require("./helpers");

const io = require("socket.io")({
  cors: {
    origin: ["http://localhost:3000"],
  },
});

const clients = {};

io.on("connection", (socket) => {
  addClient(clients, socket.id);

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
