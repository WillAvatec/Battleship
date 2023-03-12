import {domHelper} from './assistance/domHelper.js';
import board from './assistance/createBoard.js';
import '../assets/css/styles.css';
import Icon from '../assets/images/github-logo.svg';

// Global Variables
const body = document.querySelector('body');
const playerBoard = document.querySelector('#player-board');
const aiBoard = document.querySelector('#computer-board');
const computerSide = document.querySelector('.computer-side');

// ---- BOARDS -------X

function createBoards(boardSize, playerRef, PCRef) {
	board(boardSize, playerRef);
	board(boardSize, PCRef);
	const disable = document.createElement('div');
	computerSide.appendChild(disable);
	disable.classList.add('disable');
}

// ---- FOOTER -------X

function footer(body) {
	const p = domHelper('p', {}, ['Developed by avatec2312.']);
	const a = domHelper('a', {href: 'https://github.com/WillAvatec/battleship'});
	const img = domHelper('img', {src: Icon}, [a]);
	const footer = domHelper('footer', {}, [p, img]);
	body.appendChild(footer);
}

const clickCellHandler = data => {
	const enemyBoardCells = document.querySelectorAll('#computer-board .cells');
	const disableCover = document.querySelector('.disable');
	enemyBoardCells.forEach(cell => {
		cell.addEventListener('click', () => {
			cellHandler(cell, data.player1, data.enemyBoard);
			disableCover.classList.add('show');
			aiAttack(data.computer, data.playerBoard);
		}, {once: true});
	});

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

	//	Console.log(data.enemyBoard.AreAllSunked());

	function aiAttack(pc, playerBoard) {
		const [row, column, value] = pc.randomAttack(playerBoard);
		const rowElement = document.querySelector(`[data-row="${row}"]`);
		const cell = rowElement.querySelector(`[data-column="${column}"]`);
		// Render it on the DOM
		setTimeout(() => {
			writeOnCell(cell, value);
			disableCover.classList.remove('show');
		}, 600);
	}

	// Listener Handler
	function cellHandler(cell, player, board) {
	// Attack enemy Board
		const value = player.attackTo(
			[cell.parentNode.dataset.row,
				cell.dataset.column],
			board,
		);

		// Render it on the DOM
		writeOnCell(cell, value);
	}
};

export default function (data) {
	footer(body);
	createBoards(10, playerBoard, aiBoard);
	clickCellHandler(data);
}
