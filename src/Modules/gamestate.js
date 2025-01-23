// This module will contain a class that links everything together and makes the game run
import { Ship } from './ship.js';
import { Player } from './player.js';
import EventListeners from './eventlisteners.js';
import DOMManipulator from './dommanipulator.js';

export { GameState };

class GameState {
    constructor() {
        this.currentPhase = 1; // Start with Phase 1
        this.players = []; // Array to hold player instances
        this.options = {}; // Object to store game options
      }
    
      initializeGame() {
        this.currentPhase = 1;
    
        // Initialize players with empty Gameboards
        this.players = [
          new Player("Human"),
          new Player("Computer")
        ];
    
        // Call DOMManipulator to render Phase 1 elements
        DOMManipulator.renderPhase1();
    
        // Attach event listeners for Phase 1
        EventListeners.attachPhase1Listeners(this);
      }
    
      setOptions(selectedOptions) {
        // Save selected options (called by EventListeners during Phase 1)
        this.options = selectedOptions;
        console.log("Options saved:", this.options);
      }
    
      transitionToPhase(phase) {
        // Transition to the next phase (called by EventListeners at the end of a phase)
        console.log(`Transitioning to Phase ${phase}...`);
        this.currentPhase = phase;
    
        // Clear and update the DOM for the new phase
        DOMManipulator.clearPhaseElements();
        if (phase === 2) {
          DOMManipulator.renderPhase2(this.options); // Pass options to DOMManipulator
          EventListeners.attachPhase2Listeners(this);
        } else if (phase === 3) {
          DOMManipulator.renderPhase3(this.players); // Pass players to DOMManipulator
          EventListeners.attachPhase3Listeners(this);
        }
      }
}

export default new GameState();