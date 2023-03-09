/*
    - This module should get the full control over:
        * Set ships in gameboard function instances (Both player and computer)
        * Set ships in gameboard DOM elements
            - Only render placed ships in playerBoard
*/

/*
    -To accomplish that, is needed:
        * Game Data
        * A way to get coordinates from DOM gameboard
        * A way to render ships in playerBoard
        * A way to mark the current ship that is going to be set on the gameboard ✔️
*/

/*
    There are two logics for event listeners.
    One for the boats ✔️
    One for the DOM board
*/

let currentShip = 0;

function markCurrentShip(shipSelector, container) {
	if (!shipSelector.dataset.shiporder) {
		return;
	}

	currentShip = shipSelector.dataset.shiporder;
	container.querySelectorAll('.ship-selector').forEach(ship => {
		ship.style.outline = '';
	});
	shipSelector.style.outline = '3px solid black';
}

// If is the player setting then receive coords from dom
// If is the pc setting then invoke random set boats
function getCoords() {

}

function getShip() {

}

function setShipsInObject(target, {playerBoard, playerShips}) {
	playerBoard.setShip(getShip(playerShips), getCoords(target));
}

export {markCurrentShip};
