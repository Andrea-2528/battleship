export { Gameboard };

class Gameboard {
	constructor(size = 10) {
		this.grid = Array.from({ length: size }, () => Array(size).fill(null));
		this.ships = [];
	}

	placeShip(ship, startX, startY, direction) {
		const length = ship.length;

		// Validate the ship position on the grid
		for (let i = 0; i < length; i++) {
			const x = direction === 'horizontal' ? startX + i : startX;
			const y = direction === 'vertical' ? startY + i : startY;

			if (
				x >= this.grid.length ||
				y >= this.grid[0].length ||
				this.grid[x][y] !== null
			) {
				throw new Error('Invalid placement');
			}
		}

		// Place the ship on the grid
		for (let i = 0; i < length; i++) {
			const x = direction === 'horizontal' ? startX + i : startX;
			const y = direction === 'vertical' ? startY + i : startY;
			this.grid[x][y] = ship;
		}

		this.ships.push(ship);
	}

	receiveAttack(x, y) {
		const target = this.grid[x][y];
		if (target === null) {
			this.grid[x][y] = 'miss';
			return 'Miss!';
		} else if (typeof target === 'object') {
			target.hit();
			this.grid[x][y] = 'hit';
			return target.isSunk() ? 'Sunk!' : 'Hit!';
		} else {
			return 'Already attacked!';
		}
	}

	allShipsSunk() {
		return this.ships.every((ship) => ship.isSunk());
	}
}
