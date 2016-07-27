const AnswerGenerator = require('../src/answer-generator');

describe('AnswerGenerator', () => {
    it('should return a random answer', () => {
        expect(AnswerGenerator.getAnswer().length).toEqual(4);

        expect(AnswerGenerator.getAnswer()).not.toEqual(AnswerGenerator.getAnswer());

        const answers = AnswerGenerator.getAnswer().split('');
        answers.forEach((answer) => {
            expect(answers.indexOf(answer)).toEqual(answers.lastIndexOf(answer));
        })
    })
})