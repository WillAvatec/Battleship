import { domHelper } from "./assistance/domHelper.js";
import board from "./assistance/createBoard.js";
import Icon from "../../dist/github-logo.svg";

// Global Variables
const body = document.querySelector("body");
const playerBoard = document.querySelector("#player-board");
const aiBoard = document.querySelector("#computer-board");

// ---- BOARDS -------X

function createBoards(boardSize, playerRef, PCRef) {
  board(boardSize, playerRef);
  board(boardSize, PCRef);
  const disable = document.createElement("div");
  aiBoard.appendChild(disable);
  disable.classList.add("disable");
}

// ---- FOOTER -------X

function footer(body) {
  const p = domHelper("p", {}, ["Developed by avatec2312."]);
  const img = domHelper("img", { src: Icon }, []);
  const a = domHelper(
    "a",
    {
      href: "https://github.com/WillAvatec/battleship-2",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    [img]
  );

  const footer = domHelper(
    "footer",
    {
      class: "text-white py-3 bg-gradient-to-r from-pink-900 to-pink-700",
    },
    [p, a]
  );
  body.appendChild(footer);
}

const clickCellHandler = (data) => {
  const enemyBoardCells = document.querySelectorAll("#computer-board .cells");
  const disableCover = document.querySelector(".disable");
  enemyBoardCells.forEach((cell) => {
    cell.addEventListener(
      "click",
      () => {
        cellHandler(cell, data.player1, data.enemyBoard);
        disableCover.classList.add("show");
        aiAttack(data.computer, data.playerBoard);
      },
      { once: true }
    );
  });

  function writeOnCell(cell, value) {
    if (value === "☒") {
      cell.style.backgroundColor = "#ed4c86";
    } else {
      cell.style.backgroundColor = "#c8c8e5";
    }
  }

  //	Console.log(data.enemyBoard.AreAllSunked());

  function aiAttack(pc, playerBoard) {
    const [row, column, value] = pc.randomAttack(playerBoard);
    const rowElement = document.querySelector(`[data-row="${row}"]`);
    const cell = rowElement.querySelector(`[data-column="${column}"]`);
    // Render it on the DOM
    setTimeout(() => {
      writeOnCell(cell, value);
      disableCover.classList.remove("show");
    }, 600);
  }

  // Listener Handler
  function cellHandler(cell, player, board) {
    // Attack enemy Board
    const value = player.attackTo(
      [cell.parentNode.dataset.row, cell.dataset.column, cell],
      board
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
