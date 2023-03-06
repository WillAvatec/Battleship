import {domHelper} from './assistance/domHelper';
import renderBoard from './assistance/createBoard';

const body = document.querySelector('body');

// Make a modal that covers all the page.
// Render a board
// Those ships are going to be selected one at a time using a red outline as a guide
const playBtn = domHelper('button', {id: 'playBtn'}, ['Let\'s Fight!']);
const shipsContainer = domHelper('div', {class: 'ships-container'}, []);
const boardContainer = domHelper('div', {class: 'board-container'}, []);
const title = domHelper('p', {class: 'place-title'}, ['Place your ships!']);
const placementDiv = domHelper('div', {class: 'modal-content animate__animated animate__zoomIn animate__faster'}, [title, boardContainer, shipsContainer, playBtn]);
const modalDiv = domHelper('div', {class: 'modal'}, [placementDiv]);

// Close modal

playBtn.addEventListener('click', () => {
	placementDiv.classList.remove('animate__zoomIn');
	document.documentElement.style.setProperty('--animate-duration', '1s');
	placementDiv.classList.add('animate__fadeOutDown');
	placementDiv.addEventListener('animationend', () => {
		modalDiv.remove();
	});
});

function renderShipsToPlace(shipData) {
	for (let i = 0; i < shipData.length; i++) {
		const shipSelector = domHelper('div', {class: 'ship-selector'}, []);
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
	renderShipsToPlace(data.playerShips); // Create ships and append them
	body.appendChild(modalDiv); // Append the modal to the body
}
