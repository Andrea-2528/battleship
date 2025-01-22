export { Player };
import { Gameboard } from './gameboard.js';

class Player {
	constructor(name) {
		this.name = name;
		this.gameboard = new Gameboard();
	}
}
