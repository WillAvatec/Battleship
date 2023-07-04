/*
    - This module should get the full control over:
        * Set ships in gameboard function instances (Both player and computer)
        * Set ships in gameboard DOM elements
            - Only render placed ships in playerBoard
*/

import { domHelper } from "./domHelper";

/*
    -To accomplish that, is needed:
        * Game Data
        * A way to get coordinates from DOM gameboard ✔️
        * A way to render ships in playerBoard
        * A way to mark the current ship that is going to be set on the gameboard ✔️
*/

/*
    There are two logics for event listeners.
    One for the selection of the boats ✔️
    One for the DOM board 🐥
*/

let currentShip = 0;
const savedPositions = [];

const markCurrentShip = (shipSelector, container) => {
  if (!shipSelector.dataset.shiporder) {
    return;
  }

  currentShip = Number(shipSelector.dataset.shiporder);
  container.querySelectorAll(".ship-selector").forEach((selector) => {
    selector.classList.remove("selected");
  });
  shipSelector.classList.add("selected");
};

// If is the player setting then receive coords from dom
// If is the pc setting then invoke random set boats
function saveCoords(coords) {
  console.log(coords);
  const object = savedPositions.find((obj) => obj.ref === currentShip);
  if (object) {
    object.coords = coords;
    console.log(savedPositions);
    return;
  }

  savedPositions.push({ coords, ref: currentShip });
  console.log(savedPositions);
}

function getShip(ships) {
  return ships[currentShip];
}

function getCoords(cell) {
  return [Number(cell.parentNode.dataset.row), Number(cell.dataset.column)];
}

const setShips = (cell, [playerBoard, playerShips]) => {
  if (playerBoard.isAvailable(getCoords(cell), getShip(playerShips))) {
    saveCoords(getCoords(cell));
  }

  return savedPositions;
};

const renderShip = (ship, container) => {
  const gridContainer = domHelper("div", { class: "ship-on-grid" }, []);
  gridContainer.dataset.vertical = getShip(ship).isVertical;
  for (let i = 0; i < getShip(ship).getSize(); i++) {
    const shipCell = domHelper(
      "div",
      {
        class:
          "ship-cells w-6 h-6 md:w-8 md:h-8 bg-indigo-50 relative pointer-events-none",
      },
      []
    );
    gridContainer.appendChild(shipCell);
  }

  container.appendChild(gridContainer);
};

// This add the ships into the playerBoard counterpart

const putInGameBoard = ([playerBoard, ships]) => {
  savedPositions.forEach((pos) => {
    playerBoard.setShip(ships[pos.ref], pos.coords);
  });
};

export { markCurrentShip, setShips, renderShip, putInGameBoard };
