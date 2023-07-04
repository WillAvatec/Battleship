import { domHelper } from "./assistance/domHelper";
import renderBoard from "./assistance/createBoard";
import {
  markCurrentShip,
  putInGameBoard,
  renderShip,
  setShips,
} from "./assistance/placeShipController";

const body = document.querySelector("body");

// Make a modal that covers all the page.
// Render a board
// Those ships are going to be selected one at a time using a red outline as a guide
const playBtn = domHelper(
  "button",
  { id: "playBtn", class: "bg-pink-700 text-white" },
  ["Let's Fight!"]
);
const shipsContainer = domHelper(
  "div",
  {
    class:
      "grid auto-cols-fr auto-rows-auto gap-5 md:gap-4 justify-center content-center px-6 py-3 h-64 md:px-7 md:py-4 bg-slate-700  shadow-lg shadow-cyan-500/50 rounded-xl",
  },
  []
);
const boardContainer = domHelper(
  "div",
  {
    class:
      "border-pink-600 relative w-64 h-64 md:w-80 md:h-80  border-8 bg-slate-900 flex flex-col",
  },
  []
);
const title = domHelper(
  "p",
  { class: "text-xl text-center text-white sm:text-3xl" },
  ["Place your ships!"]
);
const placementDiv = domHelper(
  "div",
  {
    class:
      "modal-content flex flex-col gap-7 sm:flex-row items-center justify-around",
  },
  [boardContainer, shipsContainer]
);
const modalDiv = domHelper(
  "div",
  {
    style:
      "background-image: url('https://w0.peakpx.com/wallpaper/427/48/HD-wallpaper-purple-haze-world-reflects-water-alien.jpg');",
    class:
      "modal bg-no-repeat bg-cover min-w-full min-h-full flex flex-col justify-around items-center",
  },
  [title, placementDiv, playBtn]
);
// Const playerBoardContainer = document.querySelector(".player-board");

// Close modal

let boatPos;

function listenToShips(element, ships) {
  element.addEventListener("click", (e) => {
    if (!e.target.classList.contains("ship-selector")) return;
    markCurrentShip(e.target, element);
  });
  element.addEventListener("dblclick", (e) => {
    if (!e.target.classList.contains("ship-selector")) return;
    const vertical = ships[e.target.dataset.shiporder];
    vertical.isVertical = !vertical.isVertical;
  });
}

function listenToCells(container, data) {
  container.addEventListener("click", (e) => {
    if (e.target.classList.contains("cells")) {
      boatPos = setShips(e.target, [data.playerBoard, data.playerShips]);
      renderShip(data.playerShips, e.target);
    }
  });
}

function renderShipsToPlace(shipData) {
  for (let i = 0; i < shipData.length; i++) {
    const shipSelector = domHelper(
      "div",
      {
        class:
          "ship-selector group inline-flex relative z-10 w-max cursor-pointer",
        "data-shipOrder": i,
      },
      []
    );
    const ship = domHelper(
      "div",
      { class: "inline-grid", "data-shipSize": shipData[i].getSize() },
      [shipSelector]
    );
    for (let j = 0; j < shipData[i].getSize(); j++) {
      const shipCells = domHelper(
        "div",
        {
          class:
            "ship-cells w-6 h-6 md:w-8 md:h-8 bg-indigo-50 group-hover:bg-cyan-600 relative pointer-events-none",
        },
        []
      );
      shipSelector.appendChild(shipCells);
    }

    shipsContainer.appendChild(ship);
  }
}

export default function (data) {
  renderBoard(10, boardContainer, false); // Create board and append it to the modal
  listenToCells(boardContainer, data);
  renderShipsToPlace(data.playerShips); // Create ships and append them to the ship container
  listenToShips(shipsContainer, data.playerShips);
  body.appendChild(modalDiv); // Append the modal to the body

  playBtn.addEventListener("click", () => {
    if (boatPos?.length === 5) {
      putInGameBoard([data.playerBoard, data.playerShips]);
      modalDiv.remove();
    } else {
      console.log(boatPos?.length);
    }
  });
}
