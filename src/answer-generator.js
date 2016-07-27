'use strict';

class AnswerGenerator {
  static generateAnswer() {
    const result = [];
    const digtis = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (let i = 0; i < 4; i++) {
      const digit = parseInt(Math.random() * digtis.length);
      result.push(digtis.splice(digit, 1)[0]);
    }
    return result.join('');
  }
}

module.exports = AnswerGenerator;
