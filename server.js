const { clientsHelperFunctionGenerator } = require("./helpers");

const io = require("socket.io")({
  cors: {
    origin: ["http://localhost:3000"],
  },
});

const clients = {};
const { addClient, removeClient } = clientsHelperFunctionGenerator(clients);

io.on("connection", (socket) => {
  addClient(socket.id);
  console.log("clients", clients);

  socket.on("disconnect", () => {
    removeClient(socket.id);
    console.log("clients", clients);
  });
});

io.listen(3001);
