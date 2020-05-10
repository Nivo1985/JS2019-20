let Player = require("./Player");
let getRandomInt = require("../utils");

class Game {
  constructor(board, numberOfPlayers = getRandomInt(2, 4)) {
    this.board = board;
    this.players = [];
    for (let i = 1; i <= numberOfPlayers; i++) {
      this.players.push(new Player("Player " + i, this));
    }
  }

  Start() {
    let moveNumber = 0;
    while (this.board.figures.some(ele => !ele.used)) {
      this.players[moveNumber % this.players.length].MakeMove();
      moveNumber++;
    }
  }
}

module.exports = Game;
