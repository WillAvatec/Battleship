import domHelper from './assistance/domHelper.js';
import board from './assistance/createBoard.js';
import '../assets/css/styles.css';
import Icon from '../assets/images/github-logo.svg';

// Global Variables
const body = document.querySelector('body');
const playerBoard = document.querySelector('#player-board');
const aiBoard = document.querySelector('#computer-board');
const cpSide = document.querySelector('.computer-side');

// ---- BOARDS -------X

function createBoards(boardSize, playerRef, PCRef) {
	board(boardSize, playerRef);
	board(boardSize, PCRef);
	const disable = document.createElement('div');
	cpSide.appendChild(disable);
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

export default function () {
	footer(body);
	createBoards(10, playerBoard, aiBoard);
}
