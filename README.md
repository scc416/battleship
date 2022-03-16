# Battleship

A [battleship game](https://en.wikipedia.org/wiki/Battleship_(game)) (also known as Battleships or Sea Battle) built with [React](https://reactjs.org/) and [Socket.io](https://socket.io/).  
The project is built on [create-react-app-example](https://github.com/socketio/socket.io/tree/master/examples/create-react-app-example) of [Socket.io](https://socket.io/). 
The example is bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

![Battleship](./docs/cover.png)

## Table of Content

- [Live Demo](#live-demo)
- [Final Product](#final-product)
- [Custom hook: useGame](#custom-hook-usegame)
- [Dependencies](#dependencies)
- [Getting Started](#getting-started)
- [File Structure](#file-structure)
- [Credits](#credits)

## Live Demo

The server is deployed to Heroku. Netlify serves the static client assets:  
https://the-battleship.netlify.app/  
It might take the server some time to start up when you enter the page.

## Final Product

## Custom hook: useGame

useGame is a custom hook that control the flow of the game.
- A state contains all the details of the player.
- A reducer handle actions

### state

#### gameState

- 0: Waiting for another player to join

- 1: Players are ready, picking tiles for battleship

- 2: Done with picking tiles, waiting for the opponent to be done

- 3: Player's turn to shoot

- 4: Opponent's turn to shoot

- 5: Player won

- 6: Player lost

#### messages: Array of object

Array of messages

#### myShips: array of Object

#### opponentShips: Array of Object

#### opponent: null / string

#### gotInitialOpponent: boolean

#### haveSendInitialMsg: boolean

## Dependencies

## Getting Started

1. Clone this project to your computer
2. `cd` to the folder where this project is cloned
3. Install all dependencies with `npm install` command
4. Run the Socket.IO server with `npm run start-server` command
5. Run the app in the development mode with `npm start` command
6. Open the broswer and visit: http://localhost:3000

The page will reload if you make edits. You will also see any lint errors in the console.

## File Structure

## Credits
- [Icon](https://www.flaticon.com/premium-icon/ship_870170) created by [Freepik](https://www.flaticon.com/authors/freepik) - [Flaticon](https://www.flaticon.com/)