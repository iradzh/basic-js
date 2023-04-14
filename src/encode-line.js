const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let counter = 1;
  let result = "";
  for (let index = 0; index < str.length; index++) {
    if (index + 1 < str.length) {
      if (str[index] == str[index + 1]) {
        counter++;
      } else {
        if (counter == 0 || counter == 1) {
          result += `${str[index]}`;
        } else {
          result += `${counter}${str[index]}`;
        }
        counter = 1;
      }
    } else {
      if (counter == 0 || counter == 1) {
        result += `${str[index]}`;
      } else {
        result += `${counter}${str[index]}`;
      }
    }
  }

  return result;
}

module.exports = {
  encodeLine,
};
