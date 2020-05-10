let getRandomInt = require("../utils");

class Player {
  constructor(name, game) {
    this.name = name;
    this.points = 0;
    this.figuresLocations = [];
    this.game = game;
    this.memory = {};
  }

  MakeMove() {
    let firstFigure = this.game.board.figures.filter(elem => !elem.used)[
      getRandomInt(
        0,
        this.game.board.figures.filter(elem => !elem.used).length - 1
      )
    ];
    let secondFigure;
    let idFromMemory = this.CheckMemory(firstFigure);

    if (idFromMemory) {
      secondFigure = this.game.board.figures[idFromMemory - 1];
    } else {
      firstFigure.used = true;

      secondFigure = this.game.board.figures.filter(elem => !elem.used)[
        getRandomInt(
          0,
          this.game.board.figures.filter(elem => !elem.used).length - 1
        )
      ];
    }

    if (firstFigure.sign === secondFigure.sign) {
      firstFigure.used = true;
      secondFigure.used = true;
      this.points++;
    } else {
      firstFigure.used = false;
      secondFigure.used = false;
      this.Memorize(secondFigure);
    }
  }

  CheckMemory(figure) {
    if (this.memory[figure.sign] && this.memory[figure.sign] != figure.id) {
      return this.memory[figure.sign];
    }

    this.Memorize(figure);
  }

  Memorize(figure) {
    this.memory[figure.sign] = figure.id;
  }
}

module.exports = Player;
