const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

class VigenereCipheringMachine {
  constructor(isReversed) {
    this.isReversed = isReversed;
  }

  encrypt(str, key) {
    if (arguments.length != 2 || !str || !key) {
      throw new Error("Incorrect arguments!");
    }
    str = str.toUpperCase();
    key = key.toUpperCase();
    let result = "";
    const matrix = createMatrix();
    const newKey = modifyKey(str.length, key);

    let skippedCounter = 0;
    for (let index = 0; index < str.length; index++) {
      let col = poseInAlpha(str[index]);
      let row = poseInAlpha(newKey[index - skippedCounter]);

      if (col == -1) {
        skippedCounter++;
        result += str[index];
      } else {
        result += matrix[row][col];
      }
    }
    if (this.isReversed) {
      return reverseString(result);
    }

    return result;
  }
  decrypt(str, key) {
    if (arguments.length != 2 || !str || !key) {
      throw new Error("Incorrect arguments!");
    }
    str = str.toUpperCase();
    key = key.toUpperCase();
    let result = "";
    const matrix = createMatrix();
    const newKey = modifyKey(str.length, key);

    let skippedCounter = 0;
    for (let index = 0; index < str.length; index++) {
      let strLetterPos = poseInAlpha(str[index]);
      if (strLetterPos == -1) {
        result += str[index];
        skippedCounter++;
      } else {
        for (let j = 0; j < alphabet.length; j++) {
          let row = poseInAlpha(newKey[index - skippedCounter]);
          if (matrix[row][j] == str[index]) {
            let col = alphabet[j];
            result += col;
          }
        }
      }
    }
    if (this.isReversed) {
      return reverseString(result);
    }
    return result;
  }
}

let maschine = new VigenereCipheringMachine();
maschine.decrypt("AEIHQX SX DLLU!", "alphonse");

function createMatrix() {
  let matrix = [];

  for (let index = 0; index < 26; index++) {
    matrix.push(shiftLefArray(index));
  }
  return matrix;
}

function shiftLefArray(numberOfShift) {
  let alphabetArr = alphabet.split("");
  for (let index = 0; index < numberOfShift; index++) {
    let shiftedEls = alphabetArr.shift();
    alphabetArr.push(shiftedEls);
  }
  return alphabetArr;
}

function poseInAlpha(letter) {
  return alphabet.indexOf(letter);
}

function modifyKey(length, key) {
  if (key.length > length) {
    return key.slice(0, length);
  }
  if (key.length == length) {
    return key;
  }

  if (key.length < length) {
    let newKey = key;

    for (let index = key.length; index < length; index++) {
      newKey += newKey[index - key.length];
    }
    return newKey;
  }
}

function reverseString(str) {
  let splitString = str.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  return joinArray;
}

module.exports = {
  VigenereCipheringMachine,
};
