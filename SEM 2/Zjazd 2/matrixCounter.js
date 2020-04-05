const matrix1 = [[1, 2, -1], [3, 2, 1]];
const matrix2 = [[1, 1], [2, 2], [3, 0]];

class MatrixValidator {
  constructor() {}
  ValidForMultiplication(matrix1, matrix2) {
    let length1 = matrix1.length;
    let length2 = matrix2.length;
    return (
      matrix1.every(subArray => subArray.length === length2) &&
      matrix2.every(subArray => subArray.length === length1)
    );
  }
}

class MatrixOperator {
  constructor() {}
  Multiplier(matrix1, matrix2) {
    let result = [];
    for (let i = 0; i < matrix1.length; i++) {
      result.push([]);
      for (let j = 0; j < matrix2[0].length; j++) {
        let tempCalsulationValue = 0;
        for (let n = 0; n < matrix1[i].length; n++) {
          tempCalsulationValue += matrix1[i][n] * matrix2[n][j];
        }
        result[i].push(tempCalsulationValue);
      }
    }
    return result;
  }
}

class MatrixCalculator {
  constructor(matrixValidator, matrixOperator) {
    this.matrixValidator = matrixValidator;
    this.matrixOperator = matrixOperator;
  }

  MultiplyMatrixes(matrix1, matrix2) {
    if (this.matrixValidator.ValidForMultiplication(matrix1, matrix2)) {
      return this.matrixOperator.Multiplier(matrix1, matrix2);
    }
  }
}

let matrixValidator = new MatrixValidator();
let matrixOperator = new MatrixOperator();
let matrixCalculator = new MatrixCalculator(matrixValidator, matrixOperator);

let result = matrixCalculator.MultiplyMatrixes(matrix1, matrix2);
console.log(result);
