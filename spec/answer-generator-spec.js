const AnswerGenerator = require('../src/answer-generator');

describe('Generate Number',() => {
    it('should random number',() => {
        const isUnique = (digit,index,array) => {
            return array.lastIndexOf(digit) === index;
        }
        
        const answer = AnswerGenerator.generate();
        expect(answer.length).toEqual(4);
        expect(answer.split('').every(isUnique)).toBeTruthy();
        expect(AnswerGenerator.generate()).not.toEqual(AnswerGenerator.generate());
    })
})