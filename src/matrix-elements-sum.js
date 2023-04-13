const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let newArr = transpose(matrix);
  let result = [];
  let sum = 0;

  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr[i].length; j++) {
      if (newArr[i][j - 1] !== 0) {
        result.push(newArr[i][j]);
      }
    }
  }
  for (let index = 0; index < result.length; index++) {
    sum += result[index];
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum,
};

function transpose(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const result = [];
  for (let j = 0; j < cols; j++) {
    result[j] = [];
    for (let i = 0; i < rows; i++) {
      result[j][i] = matrix[i][j];
    }
  }
  return result;
}
