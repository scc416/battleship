const { clientsHelperFunctionGenerator } = require("./helpers");

const io = require("socket.io")({
  cors: {
    origin: ["http://localhost:3000"],
  },
});

const clients = {};
const { addClient } = clientsHelperFunctionGenerator(clients);

io.on("connection", (socket) => {
  addClient(socket.id);

  socket.on("disconnect", () => {
    console.log(`disconnect: ${socket.id}`);
    removeClient(socket.id);
    console.log("clients", clients);
  });
});

io.listen(3001);
