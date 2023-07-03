function createMarker(text) {
  const marker = document.createElement("div");
  marker.setAttribute(
    "class",
    "marker -left-5 text-white absolute flex text-sm"
  );
  marker.textContent = text;
  return marker;
}

function createRow(rowNumber) {
  const row = document.createElement("div");
  row.setAttribute("class", "rows w-full flex flex-1");
  row.dataset.row = rowNumber;
  return row;
}

function createCell(columnNumber) {
  const cell = document.createElement("div");
  cell.setAttribute(
    "class",
    "cells inline-flex text-xl border border-opacity-75 border-pink-600"
  );
  cell.dataset.column = columnNumber;
  return cell;
}

// This renders a board in the DOM
export default function renderBoard(size, parent) {
  for (let i = 0; i < size; i += 1) {
    const row = createRow(i);
    row.appendChild(createMarker(i));
    for (let j = 0; j < size; j += 1) {
      const cell = createCell(j);
      row.appendChild(cell);
      if (i === size - 1) {
        const bottomMarker = createMarker(j);
        bottomMarker.classList.add("-bottom-6");
        bottomMarker.classList.remove("-left-5");
        cell.appendChild(bottomMarker);
      }
    }

    parent.appendChild(row);
  }
}
