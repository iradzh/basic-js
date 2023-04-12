const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let firstLevel = 0;
  let stringFromNum = n.toString();
  for (let index = 0; index < stringFromNum.length; index++) {
    const numFromString = +stringFromNum[index];
    firstLevel = firstLevel + numFromString;
  }
  if (+firstLevel < 10) {
    return firstLevel;
  } else {
    let secondLevel = 0;
    let firstLevelString = firstLevel.toString();
    for (let index = 0; index < firstLevelString.length; index++) {
      const numFromString2 = +firstLevelString[index];
      secondLevel = secondLevel + numFromString2;
    }
    return secondLevel;
  }
}

module.exports = {
  getSumOfDigits,
};
