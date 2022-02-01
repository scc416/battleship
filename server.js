const io = require("socket.io")({
  cors: {
    origin: ["http://localhost:3000"],
  },
});

const clients = [];

io.on("connection", (socket) => {
  clients.push(socket.id);
  console.log("clients", clients);

  socket.on("disconnect", () => {
    console.log(`disconnect: ${socket.id}`);
    const index = clients.indexOf(socket.id);
    if (index > -1) clients.splice(index, 1);
    console.log("clients", clients);
  });
});

io.listen(3001);
