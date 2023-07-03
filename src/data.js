import Player from './factories/player.js';
import gameBoard from './factories/gameboard.js';
import ship from './factories/ship.js';
import 'animate.css';

export default function (userName) {
	return {
		player1: new Player(userName),
		computer: new Player('computer'),
		gameStart: true,
		isGameOver: false,
		playerBoard: gameBoard(),
		enemyBoard: gameBoard(),
		playerShips: [ship(4), ship(4), ship(3), ship(3), ship(2)],
		computerShips: [ship(4), ship(4), ship(3), ship(3), ship(2)],
	};
}
