'use strict'

class AnswerGeneration {
  static generate() {
    const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const numbers = [];

    for(let i = 0; i < 4; i++) {
      const randomNum = parseInt(Math.random()*digits.length);
      numbers.push(digits.splice(randomNum, 1)[0]);
    }

    return numbers.join('');
  }
}

module.exports = AnswerGeneration;