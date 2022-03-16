# Battleship

See the `main` branch's `README.md` for information about this application. This `README.md` (on branch `production`) is the documentation of the deployment (changes that need to be made for deployment to happen). The [server](https://the-battleship-api.herokuapp.com/) is deployed to [Heroku](https://heroku.com/). [Netlify](https://www.netlify.com/) serves the static [client assets](https://the-battleship.netlify.app/).

## Table of Content

- [Client](#client)
- [Server](#server)

## Client

### `src/hooks/useGame.js`

1. Modify the link from `localhost` to the deployed server on heroku:  

Before
```
const socket = io("localhost:3001");
```

After
```
const socket = io("https://
the-battleship-api.herokuapp.com/");
```

## Server

### `package.json`

1. Change the scripts for `npm start`, heroku use this command to start the server. Netlify only uses the `npm build` to build the client, so the `npm start` can be modified for heroku.  

Before
```
"start": "react-scripts start",
```
After
```
"start": "node server.js",
```

2. Includes the version of node:
```
"engines": {
  "node": "12.x"
}
```
  
### `server.js`

1. Modify first lines of code to avoid CORS error: No 'Access-Control-Allow-Origin':  

Before
```
const { clientsHelperFunctionGenerator } = require("./helpers");

const io = require("socket.io")({
  cors: {
    origin: ["http://localhost:3000"],
  },
});
```

After
```
const { createServer } = require("http");
const { Server } = require("socket.io");
const { clientsHelperFunctionGenerator } = require("./helpers");

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: true,
  origin: ["https://the-battleship.netlify.app/"],
});
```

2. Modify the last line of code:  

Before
```
io.listen(3001);
```

After
```
io.listen(process.env.PORT || 3001);
```