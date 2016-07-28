'use strict'

class CompareNum {
  static compare(input, answer) {
    const inputs = input.split('');
    const answers = answer.split('');

    const rightDigitCount = inputs.filter(a => answers.includes(a)).length;
    const x = inputs.filter(a => answers.indexOf(a) === inputs.indexOf(a)).length;
    const y = rightDigitCount - x;

    return `${x}A${y}B`;
  }
}

module.exports = CompareNum;