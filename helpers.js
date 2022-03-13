const getKeys = (clients) => Object.keys(clients);

const clientsHelperFunctionGenerator = (clients, socket, io) => {
  const getSocketById = (id) => io.sockets.sockets.get(id);

  const addClient = (avoidOpponent) => {
    const keys = getKeys(clients);
    for (let i = 0; i < keys.length; i++) {
      const otherSocketId = keys[i];
      const otherSocketOpponent = clients[otherSocketId];
      if (!otherSocketOpponent && otherSocketId !== avoidOpponent) {
        clients[otherSocketId] = socket.id;
        clients[socket.id] = otherSocketId;
        i = keys.length;
        const otherSocket = getSocketById(otherSocketId);
        otherSocket.emit("opponent", socket.id);
      }
    }
    const newKey = getKeys(clients);
    if (!newKey.includes(socket.id)) {
      clients[socket.id] = null;
    }

    socket.emit("opponent", clients[socket.id]);
  };

  const removeClient = () => {
    const otherSocketId = clients[socket.id];
    if (otherSocketId) {
      clients[otherSocketId] = null;

      const otherSocket = getSocketById(otherSocketId);
      otherSocket.emit("opponent", null);
    }
    delete clients[socket.id];
  };

  const newGame = () => {
    const opponent = clients[socket.id];
    removeClient();
    addClient(opponent);
  };

  const sendShips = (ships) => {
    const opponentSocket = getSocketById(clients[socket.id]);
    opponentSocket.emit("opponentShips", ships);
  };

  const shot = (coordinate) => {
    const opponentSocket = getSocketById(clients[socket.id]);
    opponentSocket.emit("shot", coordinate);
  };

  const end = (coordinate) => {
    const opponentSocket = getSocketById(clients[socket.id]);
    opponentSocket.emit("end", coordinate);
  };

  return { addClient, removeClient, newGame, sendShips, shot, end };
};

module.exports = { clientsHelperFunctionGenerator };
