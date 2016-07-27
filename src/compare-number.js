'use strict'

class CompareNum{
  static compare(inputs, answer) {
    const countOfA = inputs.split('').map((input, index) => answer.lastIndexOf(input) === index? 1 : 0).reduce((a, b)=> a+b);
    const countOfB = inputs.split('').map((input, index) => answer.lastIndexOf(input) !== index && answer.split('').find(element => element === input) ? 1 : 0).reduce((a, b) => a+b);

    return `${countOfA}A${countOfB}B`;
  }
}

module.exports = CompareNum;