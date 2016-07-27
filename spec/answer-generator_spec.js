"use strict";

const AnswerGenerator = require('../src/answer-generator');

describe('Answer Generator', () => {

  it('generator answer', () => {
    const isUnique = (item, index, array) => {
      return array.lastIndexOf(item) === index;
    };

    const answer = AnswerGenerator.answerGenerator();
    expect(answer.length).toEqual(4);
    expect(answer.split('').every(isUnique)).toBeTruthy();
    expect(AnswerGenerator.answerGenerator()).not.toEqual(AnswerGenerator.answerGenerator());
  });
});