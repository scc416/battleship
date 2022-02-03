const getKeys = (clients) => Object.keys(clients);

const clientsHelperFunctionGenerator = (clients, socket) => {
  const addClient = () => {
    const keys = getKeys(clients);
    for (let i = 0; i < keys.length; i++) {
      const otherSocket = clients[keys[i]];
      if (!otherSocket) {
        clients[keys[i]] = socket.id;
        clients[socket.id] = keys[i];
        i = keys.length;
      }
    }
    const newKey = getKeys(clients);
    if (!newKey.includes(socket.id)) {
      clients[socket.id] = null;
    }

    socket.emit("opponent", clients[socket.id]);
  };

  const removeClient = () => {
    const otherSocket = clients[socket.id];
    if (otherSocket) clients[otherSocket] = null;
    delete clients[socket.id];
  };

  const newGame = () => {
    
  };
  return { addClient, removeClient, newGame };
};

module.exports = { clientsHelperFunctionGenerator };
