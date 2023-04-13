const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arrWithEls = [];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] !== -1) {
      arrWithEls.push(arr[index]);
      arr[index] = 0;
    }
  }

  arrWithEls.sort((a, b) => a - b);

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] == 0) {
      arr[index] = arrWithEls.shift();
    }
  }
  return arr;
}

module.exports = {
  sortByHeight,
};
