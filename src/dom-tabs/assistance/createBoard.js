function createMarker(text) {
	const marker = document.createElement('div');
	marker.className = 'marker';
	marker.textContent = text;
	return marker;
}

function createRow(rowNumber) {
	const row = document.createElement('div');
	row.setAttribute('class', 'rows');
	row.dataset.row = rowNumber;
	return row;
}

function createCell(columnNumber) {
	const cell = document.createElement('div');
	cell.setAttribute('class', 'cells');
	cell.dataset.column = columnNumber;
	return cell;
}

// This renders a board in the DOM
export default function renderBoard(size, parent, addMarker = true) {
	for (let i = 0; i < size; i += 1) {
		const row = createRow(i);
		if (addMarker) {
			row.appendChild(createMarker(i));
		}

		for (let j = 0; j < size; j += 1) {
			const cell = createCell(j);
			row.appendChild(cell);
		}

		parent.appendChild(row);
	}
}

