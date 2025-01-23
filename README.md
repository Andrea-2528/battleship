# Battleship
## Description
- The game is played on 2 grids, for each of the 2 players
- The grid is 10x10 squares
- Coordinates are identified by a letter (column) and a number (row)
- Each player has 5 ships:
  - Carrier (5 squares)
  - Battleship (4 squares)
  - Cruiser (3 squares)
  - Submarine (3 squares)
  - Destroyer (2 squares)
- The game is won by the first player to sink all the opponent's ships
## Gameplay
- The game is played against the computer
- The computer arranges its ships on its grid
- The player arranges their ships on their grid until all are placed
- Ships cannot be placed over other ships or diagonally, or outside the grid
- The player and computer take turns attacking each other:
    ### Player
    - The player chooses a target square on the opponent's grid
    - If it's a hit, it gets marked as such, otherwise it gets marked as already shot
    - If the hit sinks a ship, it gets marked as such
    - If the sunken ship is the last ship on the board, the player wins
    ### Computer
    - The computer chooses a target square on the player's grid
    - If it's a hit, it gets marked as such, otherwise it gets marked as already shot
    - If the hit sinks a ship, it gets marked as such
    - If the sunken ship is the last ship on the board, the computer wins
## Code:
### HTML
- For the moment, I layed out a basic HTML structure that will remain mostly unchanged.
- I've specified with comments which elements will be dynamically populated by JS.
- There's yet to decide how to display a single "ship" and therefore the squares it's made up of. The same structure and design of those squares will be used on the topbar for the drag/drop, on the bottom stats for displaying the fleet, and on the grid itself to play the actual game.
### CSS
- CSS for the moment has nothing going on except a basic reset.
- It will keep being like this until almost everything is done and I need a visual reference of what's happening.
### Javascript
- The `Ship` class marks individual ships, with their lenght and whether they've been hit (and how many times) or sunk.
    - It should have a `hit` function to increment the number of hits.
    - It should have a `isSunk` function to check whether the ship has been sunk. 
- The `Gameboard` class creates a grid and places created ships on it.
    -  Gameboards should have a `receiveAttack` function that takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.
    -  Gameboards should keep track of missed attacks so they can display them properly.
    -  Gameboards should be able to report whether or not all of their ships have been sunk.
- The `Player` class should contain the player's gameboard (or the computer's gameboard) and eventually, methods related to those and the game.
- The `Gamestate` class should create new players, make them populate the grid (randomly for now) and start the game.
    - The game is handled by two other modules: `EventListeners` and `DOMManipulation`.
    - The first adds all interactivity to the DOM and allows for changing the gamestate.
    - The second handles the DOM manipulation and the gameboard rendering. 