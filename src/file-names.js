const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let myMap = new Map();
  let result = [];
  for (let index = 0; index < names.length; index++) {
    if (typeof myMap.get(names[index]) == "undefined") {
      myMap.set(names[index], 0);
      result.push(names[index]);
    } else {
      console.log(names[index]);
      let newValue = myMap.get(names[index]) + 1;
      myMap.set(names[index], newValue);
      let newFileName = `${names[index]}(${newValue})`;
      result.push(newFileName);
      myMap.set(newFileName, 0);
    }
  }
  return result;
}

module.exports = {
  renameFiles,
};
