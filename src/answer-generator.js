'use strict';

class AnswerGenerator {
  static generate() {
    const result = [];
    const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < 4; i++) {
      const random = parseInt(Math.random() * digits.length);

      result.push(digits.splice(random, 1)[0]);
    }

    return result.join('');
  }
}

module.exports = AnswerGenerator;