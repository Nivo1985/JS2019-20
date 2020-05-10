let Figure = require("./Classes/Figure");
let Board = require("./Classes/Board");
let getRandomInt = require("./utils");

const board = [
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""]
];

const figures = ["!", "@", "#", "$", "%", "^", "&", "*", "=", "+", "-", "_"];

function getPositionsFrom2dArray(array) {
  let result = [];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      result.push({ x: i, y: j });
    }
  }

  return result;
}

function mapToBoard(array) {
  let objectFigures = [];
  let counter = 0;
  array.forEach(outerElem =>
    outerElem.forEach(innerElem =>
      objectFigures.push(new Figure(++counter, innerElem))
    )
  );

  return new Board(objectFigures);
}

function getRandonBoard() {
  let positionsArray = getPositionsFrom2dArray(board);
  while (!!positionsArray.length) {
    let currentIndex = getRandomInt(0, positionsArray.length - 1);
    let currentPosition = positionsArray.splice(currentIndex, 1)[0];

    board[currentPosition.x][currentPosition.y] = figures[0];

    if (!(positionsArray.length % 2)) {
      figures.splice(0, 1);
    }
  }

  return mapToBoard(board);
}

module.exports = getRandonBoard;
