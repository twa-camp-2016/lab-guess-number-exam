const Answer = require('../src/answer');

describe('Answer Generator', () => {
    it('should generate answer', () => {
        const isUnique = (item, index, array) => {
            return array.lastIndexOf(item) === index;
        };

        const answer = Answer.generate();
        expect(answer.length).toEqual(4);
        expect(answer.split("").every(isUnique)).toBeTruthy();
        expect(Answer.generate()).not.toEqual(Answer.generate());
    });
});