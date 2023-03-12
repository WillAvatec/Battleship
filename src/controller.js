import startingScreen from './dom-tabs/StartingScreen';
import placementMenu from './dom-tabs/placementMenu';
import gameScreen from './dom-tabs/principalView';
import setData from './data.js';

// - Define variables before
// - Create logic
// - Call the start of the game at the end

let gameData;
let player;
let computer;

const displayNames = ([player, computer]) => {
	const playerName = document.querySelector('.player-name');
	const computerName = document.querySelector('.computer-name');
	playerName.textContent = player.name;
	computerName.textContent = computer.name;
};

const gameStarter = playerName => {
	gameData = setData(playerName);
	[player, computer] = [gameData.player1, gameData.computer];
	displayNames([player, computer]);
	placementMenu(gameData);
	gameScreen(gameData);
};

const initializeGame = () => {
	startingScreen(gameStarter);
};

initializeGame();
