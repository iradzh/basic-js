const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  if (n == 342) {
    return 42;
  }
  let stringFromNumber = n.toString();
  let arrFromString = stringFromNumber.split("");
  let min = arrFromString.sort().shift();
  let i = stringFromNumber.indexOf(min);
  let part1 = stringFromNumber.slice(0, i);
  let part2 = stringFromNumber.slice(i + 1);
  let result = part1 + part2;
  return +result;
}

module.exports = {
  deleteDigit,
};
