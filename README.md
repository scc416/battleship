# Battleship

See the `main` branch's `README.md` for information about this application. This `README.md` (on branch `production`) is the documentation of the deployment (changes that need to be made for deployment to happen). The [server](https://the-battleship-api.herokuapp.com/) is deployed to [Heroku](https://heroku.com/). [Netlify](https://www.netlify.com/) serves the static [client assets](https://the-battleship.netlify.app/).

## Table of Content

- [Client](#client)
- [Server](#server)

## Client

### `src/hooks/useGame.js`

const socket = io("localhost:3001");
const socket = io("https://the-battleship-api.herokuapp.com/");

## Server

### `package.json`

"start": "react-scripts start",
"start": "node server.js",


"engines": {
  "node": "12.x"
}

  
### `server.js`

const { createServer } = require("http");
const { Server } = require("socket.io");
const { clientsHelperFunctionGenerator } = require("./helpers");

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: true,
  origin: ["https://the-battleship.netlify.app/"],
});

io.listen(process.env.PORT || 3001);
io.listen(3001);