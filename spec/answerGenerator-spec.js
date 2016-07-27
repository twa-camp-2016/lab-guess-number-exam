const AnswerGenerator = require('../src/answerGenerator');

describe('answer generate', () => {
    it('should generate number', () => {
        const isUnique = (item, index, array) => {
            return array.lastIndexOf(item) === index;
        }

        const answer = AnswerGenerator.generate();
        
        expect(answer.length).toEqual(4);
        expect(answer.split('').every(isUnique));
        expect(AnswerGenerator.generate()).not.toEqual(AnswerGenerator.generate());
    })
})