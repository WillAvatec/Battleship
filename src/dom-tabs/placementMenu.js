import {domHelper} from './assistance/domHelper';
import renderBoard from './assistance/createBoard';
import {markCurrentShip, putInGameBoard, renderShip, setShips} from './assistance/placeShipController';

const body = document.querySelector('body');

// Make a modal that covers all the page.
// Render a board
// Those ships are going to be selected one at a time using a red outline as a guide
const playBtn = domHelper('button', {id: 'playBtn', class: 'animate__animated'}, ['Let\'s Fight!']);
const shipsContainer = domHelper('div', {class: 'ships-container'}, []);
const boardContainer = domHelper('div', {class: 'board-container'}, []);
const title = domHelper('p', {class: 'place-title'}, ['Place your ships!']);
const placementDiv = domHelper('div', {class: 'modal-content animate__animated animate__zoomIn animate__faster'}, [title, boardContainer, shipsContainer, playBtn]);
const modalDiv = domHelper('div', {class: 'modal'}, [placementDiv]);
const playerBoardContainer = document.querySelector('.player-board');

// Close modal

let boatPos;

function listenToShips(element, ships) {
	element.addEventListener('click', e => {
		markCurrentShip(e.target, element);
	});
	element.addEventListener('dblclick', e => {
		const vertical = ships[e.target.dataset.shiporder];
		vertical.isVertical = !vertical.isVertical;
	});
}

function listenToCells(container, data) {
	container.addEventListener('click', e => {
		if (e.target.classList.contains('cells')) {
			boatPos = setShips(e.target, [data.playerBoard, data.playerShips]);
			renderShip(data.playerShips, e.target);
		}
	});
}

function renderShipsToPlace(shipData) {
	for (let i = 0; i < shipData.length; i++) {
		const shipSelector = domHelper('div', {class: 'ship-selector', 'data-shipOrder': i}, []);
		const ship = domHelper('div', {class: 'ship ship-placement', 'data-shipSize': shipData[i].getSize()}, [shipSelector]);
		for (let j = 0; j < shipData[i].getSize(); j++) {
			const shipCells = domHelper('div', {class: 'ship-cells'}, []);
			shipSelector.appendChild(shipCells);
		}

		shipsContainer.appendChild(ship);
	}
}

export default function (data) {
	renderBoard(10, boardContainer, false); // Create board and append it
	listenToCells(boardContainer, data);
	renderShipsToPlace(data.playerShips); // Create ships and append them
	listenToShips(shipsContainer, data.playerShips);
	body.appendChild(modalDiv); // Append the modal to the body

	playBtn.addEventListener('click', () => {
		if (boatPos?.length === 5) {
			placementDiv.classList.remove('animate__zoomIn');
			document.documentElement.style.setProperty('--animate-duration', '1s');
			placementDiv.classList.add('animate__fadeOutDown');
			placementDiv.addEventListener('animationend', () => {
				modalDiv.remove();
			});
			putInGameBoard([data.playerBoard, data.playerShips]);
		} else {
			playBtn.classList.add('animate__shakeX');
			playBtn.addEventListener('animationend', () => {
				playBtn.classList.remove('animate__shakeX');
			});
		}
	});
}
