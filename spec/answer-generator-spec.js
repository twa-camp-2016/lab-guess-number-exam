const AnswerGenerator = require('../src/answer-generator');

describe('Generator answer', () => {
   it('should generate answer', () => {
       const answer = AnswerGenerator.generate().split('');

       const isUnique = (item, index, array) => {
           return array.lastIndexOf(item) === index;
       };

       expect(answer.length).toEqual(4);
       expect(answer.every(isUnique)).toBeTruthy();
       expect(AnswerGenerator.generate()).not.toEqual(AnswerGenerator.generate());
   });
});