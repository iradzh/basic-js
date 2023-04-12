const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let result = "";
  console.log("HERE");
  let filteredArray = [];
  if (!members) {
    return false;
  }
  for (let index = 0; index < members.length; index++) {
    if (typeof members[index] == "string") {
      console.log(members[index]);
      filteredArray.push(members[index].trimStart().toUpperCase());
    }
  }
  filteredArray.sort();
  console.log(filteredArray);
  for (let index = 0; index < filteredArray.length; index++) {
    const letter = filteredArray[index].slice(0, 1);
    result += letter;
  }
  return result;
}

module.exports = {
  createDreamTeam,
};
