const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let result = [];
  for (let row = 0; row < matrix.length; row++) {
    let line = [];
    for (let col = 0; col < matrix[row].length; col++) {
      const el = matrix[row][col];
      let counter = 0;
      counter += checkTopLeft(matrix, row, col) ? 1 : 0;
      counter += checkTop(matrix, row, col) ? 1 : 0;
      counter += checkTopRight(matrix, row, col) ? 1 : 0;

      counter += checkLeft(matrix, row, col) ? 1 : 0;
      counter += checkRight(matrix, row, col) ? 1 : 0;

      counter += checkBottomLeft(matrix, row, col) ? 1 : 0;
      counter += checkBottom(matrix, row, col) ? 1 : 0;
      counter += checkBottomRight(matrix, row, col) ? 1 : 0;
      line.push(counter);
    }
    result.push(line);
  }
  return result;
}

function checkTopLeft(matrix, row, col) {
  return col - 1 >= 0 && row - 1 >= 0 && matrix[row - 1][col - 1] == true;
}

function checkTop(matrix, row, col) {
  return row - 1 >= 0 && matrix[row - 1][col] == true;
}

function checkTopRight(matrix, row, col) {
  return (
    col + 1 < matrix.length && row - 1 >= 0 && matrix[row - 1][col + 1] == true
  );
}

function checkLeft(matrix, row, col) {
  return col - 1 >= 0 && matrix[row][col - 1] == true;
}
function checkRight(matrix, row, col) {
  return col + 1 < matrix.length && matrix[row][col + 1] == true;
}

function checkBottomLeft(matrix, row, col) {
  return (
    col - 1 >= 0 && row + 1 < matrix.length && matrix[row + 1][col - 1] == true
  );
}

function checkBottom(matrix, row, col) {
  return row + 1 < matrix.length && matrix[row + 1][col] == true;
}

function checkBottomRight(matrix, row, col) {
  return (
    col + 1 < matrix.length &&
    row + 1 < matrix.length &&
    matrix[row + 1][col + 1] == true
  );
}

module.exports = {
  minesweeper,
};
