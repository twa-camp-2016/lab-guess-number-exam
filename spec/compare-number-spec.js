'use strict'

const CompareNum = require('../src/compare-number');

describe('compare number', () => {
  it('should be', () => {
    [
      {
        input: '1234',
        answer: '1234',
        result: '4A0B'
      },
      {
        input: '1234',
        answer: '4321',
        result: '0A4B'
      },
      {
        input: '1234',
        answer: '5678',
        result: '0A0B'
      },
      {
        input: '1234',
        answer: '1243',
        result: '2A2B'
      }
    ].forEach(element => {
      const result = CompareNum.compare(element.input, element.answer);
      expect(result).toEqual(element.result);
    });
  })
})