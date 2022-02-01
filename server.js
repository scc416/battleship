const { clientsHelperFunctionGenerator } = require("./helpers");

const io = require("socket.io")({
  cors: {
    origin: ["http://localhost:3000"],
  },
});

const clients = {};
const { addClient, removeClient, newGame } =
  clientsHelperFunctionGenerator(clients);

io.on("connection", (socket) => {
  addClient(socket.id);

  socket.on("newGame", () => {
    newGame(socket.id);
  });

  socket.on("disconnect", () => {
    removeClient(socket.id);
  });
});

io.listen(3001);
