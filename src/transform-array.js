const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  let transformed = [];
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] == "--double-next" && arr[index + 1]) {
      transformed.push(arr[index + 1]);
    } else if (
      arr[index] == "--double-prev" &&
      arr[index - 1] &&
      index > 0 &&
      transformed[index - 1] == arr[index - 1]
    ) {
      transformed.push(arr[index - 1]);
    } else if (
      arr[index] == "--discard-prev" &&
      arr[index - 1] &&
      transformed[index - 1] == arr[index - 1]
    ) {
      transformed.pop();
    } else if (arr[index] == "--discard-next" && arr[index + 1]) {
      index++;
    } else if (
      arr[index] != "--double-next" &&
      arr[index] != "--double-prev" &&
      arr[index] != "--discard-next" &&
      arr[index] != "--discard-prev"
    ) {
      transformed.push(arr[index]);
    }
  }
  return transformed;
}

module.exports = {
  transform,
};
