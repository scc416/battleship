const getKeys = (clients) => Object.keys(clients);

const addClient = (clients, newSocket) => {
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
};

module.exports = { addClient };
