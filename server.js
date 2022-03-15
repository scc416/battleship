const { createServer } = require("http");
const { Server } = require("socket.io");
const { clientsHelperFunctionGenerator } = require("./helpers");

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: true,
  origin: ["https://the-battleship.netlify.app/"],
});

const clients = {};

io.on("connection", (socket) => {
  const { addClient, removeClient, newGame, sendShips, shot, end } =
    clientsHelperFunctionGenerator(clients, socket, io);

  addClient();

  socket.on("newGame", newGame);

  socket.on("ships", sendShips);

  socket.on("shot", shot);

  socket.on("end", end);

  socket.on("disconnect", removeClient);
});

io.listen(process.env.PORT || 3001);
