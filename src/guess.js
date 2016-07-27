'use strict'

const AnswerGeneration = require('./answer-generation');
const CompareNum = require('./compare-number');

class Guess {
  static guess(guessNum) {
    const result = AnswerGeneration.generate();
    return CompareNum.compare(result, guessNum);
  }

}

module.exports= Guess;