const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let string;

  if (str == null) {
    string = "null";
  } else {
    string = `${str}`.toString();
  }

  if (typeof options.addition == "undefined") {
    cleanAdd = "";
  } else if (options.addition == null) {
    cleanAdd = "null";
  } else {
    cleanAdd = `${options.addition}`.toString();
  }

  let repeated = "";
  let adds = "";

  if (!options.separator) {
    options.separator = "+";
  }
  if (!options.additionSeparator) {
    options.additionSeparator = "|";
  }

  if (!options.additionRepeatTimes) {
    adds += cleanAdd;
  } else {
    for (let index = 0; index < options.additionRepeatTimes; index++) {
      if (index == 0) {
        adds += cleanAdd;
      } else {
        adds += options.additionSeparator + cleanAdd;
      }
    }
  }

  if (!options.repeatTimes) {
    return string + `${options.addition}`;
  } else {
    for (let index = 0; index < options.repeatTimes; index++) {
      if (index == 0) {
        repeated += string + adds;
      } else {
        repeated += options.separator + string + adds;
      }
    }

    return repeated;
  }
}

module.exports = {
  repeater,
};
