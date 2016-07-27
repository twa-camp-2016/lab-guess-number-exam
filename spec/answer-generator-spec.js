const AnswerGenerator = require('../src/compare-number');

describe('AnswerGenerator', () => {
  it('should generateAnswer', () => {
    const answer = AnswerGenerator.generateAnswer();
    const isUnique = (item, index, array) => {
      return array.lastIndexOf(item) === index;
    }
    expect(answer.length).toEqual(4);
    expect(answer.split('').every(isUnique)).toBeTruthy();
    expect(AnswerGenerator.generateAnswer()).not.toEqual(AnswerGenerator.generateAnswer());
  })
})
