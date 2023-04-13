const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (arguments.length == 0) {
      this.chain.push(" ");
    } else {
      this.chain.push(value);
    }

    return this;
  },
  removeLink(position) {
    if (
      !Number.isInteger(position) ||
      position > this.chain.length ||
      position <= 0
    ) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }

    let newArr = [];

    for (let index = 0; index < this.chain.length; index++) {
      if (position != index + 1) {
        newArr.push(this.chain[index]);
      }
    }
    this.chain = newArr;
    return this;
  },
  reverseChain() {
    let reversedChain = [];
    for (let index = this.chain.length - 1; index >= 0; index--) {
      reversedChain.push(this.chain[index]);
    }
    this.chain = reversedChain;
    return this;
  },
  finishChain() {
    let finalChain = "";
    for (let index = 0; index < this.chain.length; index++) {
      if (index == this.chain.length - 1) {
        finalChain += `( ${this.chain[index]} )`;
      } else {
        finalChain += `( ${this.chain[index]} )~~`;
      }
    }
    this.chain = [];
    return `${finalChain}`;
  },
};

module.exports = {
  chainMaker,
};
