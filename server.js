const { clientsHelperFunctionGenerator } = require("./helpers");

const io = require("socket.io")({
  cors: {
    origin: ["http://localhost:3000"],
  },
});

const clients = {};

io.on("connection", (socket) => {
  const { addClient, removeClient, newGame } =
    clientsHelperFunctionGenerator(clients, socket);
    
  addClient(socket.id);

  socket.on("newGame", () => {
    newGame(socket.id);
  });

  socket.on("disconnect", () => {
    removeClient(socket.id);
  });
});

io.listen(3001);
