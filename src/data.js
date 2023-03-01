import Player from './factories/player.js';
import gameBoard from './factories/gameboard.js';
import ship from './factories/ship.js';

export default function (userName) {
	const player1 = new Player(userName);
	const computer = new Player('computer');
	const isGameOver = false;
	const playerBoard = gameBoard();
	const enemyBoard = gameBoard();
	const ship3 = ship(3);
	ship.isVertical = true;
	return {
		player1,
		computer,
		isGameOver,
		playerBoard,
		enemyBoard,
		ship3,
	};
}
