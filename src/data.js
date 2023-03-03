import Player from './factories/player.js';
import gameBoard from './factories/gameboard.js';
import ship from './factories/ship.js';

export default function (userName) {
	const player1 = new Player(userName);
	const computer = new Player('computer');
	const gameStart = true; 	// This one is to start the game
	const isGameOver = false; 	// This is to finish the game
	const playerBoard = gameBoard();
	const enemyBoard = gameBoard();
	const ship3 = ship(3);
	ship.isVertical = true;
	return {
		player1,
		computer,
		gameStart,
		isGameOver,
		playerBoard,
		enemyBoard,
		ship3,
	};
}
