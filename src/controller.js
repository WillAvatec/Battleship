import startingScreen from "./dom-tabs/StartingScreen";
import gameScreen from "./dom-tabs/principalView";
import setData from "./data.js";
import "./assets/css/styles.css";

// - Define variables before
// - Create logic
// - Call the start of the game at the end

let gameData;
let player;
let computer;

const displayNames = ([player, computer]) => {
  const playerName = document.querySelector(".player-name");
  const computerName = document.querySelector(".computer-name");
  playerName.textContent = player.name;
  computerName.textContent = computer.name;
};

const gameStarter = (playerName) => {
  gameData = setData(playerName);
  [player, computer] = [gameData.player1, gameData.computer];
  displayNames([player, computer]);
  gameScreen(gameData);
  gameData.enemyBoard.setShip(gameData.ship3, [7, 0]);
};

const initializeGame = () => {
  startingScreen(gameStarter);
};

initializeGame();
