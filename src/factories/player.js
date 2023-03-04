export default class {
	constructor(name = 'Player1') {
		if (name === 'computer') {
			// Pick one randomly
			const names = ['Joey', 'Mark', 'Will', 'Colonel', 'Beth'];
			this.name = names[Math.floor(Math.random() * names.length)] + '\'s Board';
		} else {
			this.name = name + '\'s Board';
		}

		this.record = [];
	}

	attackTo(coord, board) {
		const [x, y] = coord;
		if (this.record.find(obj => obj.row === x && obj.column === y)) {
			return false;
		}

		this.record.push({row: x, column: y});
		return board.receiveAttack(coord);
	}

	randomAttack(board) {
		if (this.record.length === 100) {
			return false;
		}

		let row = Math.floor(Math.random() * 10);
		let column = Math.floor(Math.random() * 10);

		while (this.hasAlreadyHit(row, column)) {
			row = Math.floor(Math.random() * 10);
			column = Math.floor(Math.random() * 10);
		}

		const value = this.attackTo([row, column], board);

		return [row, column, value];
	}

	hasAlreadyHit(row, column) {
		for (let i = 0; i < this.record.length; i += 1) {
			if (
				this.record[i].row === row
          && this.record[i].column === column
			) {
				return true;
			}
		}

		return false;
	}
}
