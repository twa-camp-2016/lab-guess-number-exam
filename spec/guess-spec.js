'use strict'

const Guess = require('../src/guess');
const AnswerGenerator = require('../src/answer-generation');

describe('guess', () => {
  it('should guess', () => {
    spyOn(AnswerGenerator, 'generate').and.returnValue('1234');
    const result = Guess.guess('1234');
    expect(result).toEqual('4A0B');
  });
});