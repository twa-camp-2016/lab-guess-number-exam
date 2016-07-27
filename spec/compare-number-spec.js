const CompareNumber = require('../src/compare-number');

describe('CompareNumber', () => {
  it('should compare number', () => {
    [{
      answer: '1234',
      userNumber: '1234',
      result: '4A0B'
    }, {
      answer: '1234',
      userNumber: '5678',
      result: '0A0B'
    }, {
      answer: '1234',
      userNumber: '1243',
      result: '2A2B'
    }].forEach(example => {
      const result = CompareNumber.compareNumber(example.answer, example.userNumber);

      expect(result).toEqual(example.result);
    })
  })
})
