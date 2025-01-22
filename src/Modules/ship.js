export { Ship };

// Each ship object should contain its length, the number of times it's been hit, and whether or not it's been sunk
class Ship {
	constructor(length) {
		this.length = length;
		this.hits = 0;
		this.sunk = false;
	}

	hit() {
		this.hits++;
	}

	isSunk() {
		return this.hits === this.length;
	}
}
