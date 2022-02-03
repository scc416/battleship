const getKeys = (clients) => Object.keys(clients);

const clientsHelperFunctionGenerator = (clients, socket, io) => {
  const getSocketById = (id) => io.sockets.sockets.get(id);

  const addClient = () => {
    const keys = getKeys(clients);
    for (let i = 0; i < keys.length; i++) {
      const otherSocketId = keys[i];
      const otherSocketOpponent = clients[otherSocketId];
      if (!otherSocketOpponent) {
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

  const newGame = () => {};
  return { addClient, removeClient, newGame };
};

module.exports = { clientsHelperFunctionGenerator };
