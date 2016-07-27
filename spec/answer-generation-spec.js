'use strict'

const AnswerGeneration = require('../src/answer-generation');

describe('answer generation', () => {
  it('should generate', () => {
    const isUnique = (item, index, array) => {
      return array.lastIndexOf(item) === index;
    }

    const randomNum = AnswerGeneration.generate();
    expect(randomNum.length).toEqual(4);
    expect(randomNum.split('').every(isUnique)).toBeTruthy();
    expect(AnswerGeneration.generate()).not.toEqual(AnswerGeneration.generate);

  })
});