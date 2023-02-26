import principalView from './dom-tabs/principalView';
import Data from './data.js';
principalView();

const enemyBoardCells = document.querySelectorAll('#computer-board .cells');
const disableCover = document.querySelector('.disable');

// Write in cell handler
function writeOnCell(cell, value) {
	if (value === '☒') {
		cell.style.backgroundColor = '#fecaca';
		cell.style.color = '#ef4444';
	} else {
		cell.style.backgroundColor = '#9292f7';
		cell.style.color = '#2eafe';
		cell.style.fontSize = '2rem';
	}

	cell.appendChild(document.createTextNode(value));
}

// Listener Handler
function cellListener(cell, player, board) {
	// Attack enemy Board
	const value = player.attackTo(
		[cell.parentNode.dataset.row,
			cell.dataset.column,
			cell],
		board,
	);

	// Render it on the DOM
	writeOnCell(cell, value);
}

// Ai attacks randomly to playerBoard
function aiAttack(pc, playerBoard) {
	const [row, column, value] = pc.randomAttack(playerBoard);
	const rowElement = document.querySelector(`[data-row="${row}"]`);
	const cell = rowElement.querySelector(`[data-column="${column}"]`);

	// Render it on the DOM
	writeOnCell(cell, value);
	disableCover.classList.remove('show');
}

// Adds event listeners to all the cells in enemyBoard
function attackEnemyBoard(cells) {
	cells.forEach(cell => {
		cell.addEventListener('click', () => {
			cellListener(cell, Data.player1, Data.enemyBoard);
			disableCover.classList.add('show');
			setTimeout(() => {
				aiAttack(Data.computer, Data.playerBoard);
			}, 600);
		}, {once: true});
	});
}

attackEnemyBoard(enemyBoardCells);
Data.playerBoard.setShip(Data.ship3, [7, 0]);
Data.enemyBoard.setShip(Data.ship3, [7, 0]);
