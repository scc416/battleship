const getKeys = (clients) => Object.keys(clients);

const clientsHelperFunctionGenerator = (clients, socket) => {
  const addClient = (newSocket) => {
    const keys = getKeys(clients);
    for (let i = 0; i < keys.length; i++) {
      const otherSocket = clients[keys[i]];
      if (!otherSocket) {
        clients[keys[i]] = newSocket;
        clients[newSocket] = keys[i];
        i = keys.length;
      }
    }
    const newKey = getKeys(clients);
    if (!newKey.includes(newSocket)) {
      clients[newSocket] = null;
    }

    socket.emit("opponent", clients[socket.id]);
  };

  const removeClient = (socketId) => {
    const otherSocket = clients[socketId];
    if (otherSocket) clients[otherSocket] = null;
    delete clients[socketId];
  };

  const newGame = (socketId) => {};
  return { addClient, removeClient, newGame };
};

module.exports = { clientsHelperFunctionGenerator };
