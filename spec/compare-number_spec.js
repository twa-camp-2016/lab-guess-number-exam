"use strict";

const CompareNumber = require('../src/compare-number');

describe('Compare Number', () => {

  it('return xAxB', () => {
    [
      {input: '1234', answer: '1234', result: '4A0B'},
      {input: '4321', answer: '1234', result: '0A4B'},
      {input: '5678', answer: '1234', result: '0A0B'}
    ].forEach((example) => {
      const result = CompareNumber.compareNumber(example.input, example.answer);
      expect(result).toEqual(example.result);
    })
  });
});