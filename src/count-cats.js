const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(/* matrix */) {
  throw new NotImplementedError("Not implemented");
  // remove line with error and write your code here
}

module.exports = {
  countCats(backyard) {
    let count = 0;
    for (let index = 0; index < backyard.length; index++) {
      for (let j = 0; j < backyard[index].length; j++) {
        if (backyard[index][j] == "^^") {
          count++;
        }
      }
    }
    return count;
  },
};
