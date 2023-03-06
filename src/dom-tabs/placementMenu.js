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
const placementDiv = domHelper('div', {class: 'modal-content'}, [title, boardContainer, shipsContainer, playBtn]);
const modalDiv = domHelper('div', {class: 'modal'}, [placementDiv]);
// Render 5 ships on the right

function renderShipsToPlace(shipData) {
	for (let i = 0; i < shipData.length; i++) {
		const ship = domHelper('div', {class: 'ship ship-placement', 'data-shipSize': shipData[i].getSize()}, []);
		for (let j = 0; j < shipData[i].getSize(); j++) {
			const shipCells = domHelper('div', {class: 'ship-cells'}, []);
			ship.appendChild(shipCells);
		}

		shipsContainer.appendChild(ship);
	}
}

export default function (data) {
	renderBoard(10, boardContainer, false); // Create board and append it
	renderShipsToPlace(data.ships); // Create ships and append them
	body.appendChild(modalDiv); // Append the modal to the body
}
