const AnswerGenerator = require('../src/models/AnswerGenerator');

describe('AnswerGenerator',() => {

    it('get random', () => {

        const isUnique = (item, index, array) => {
            return array.lastIndexOf(item) === index;
        }

        const random = AnswerGenerator.generator();
        expect(random.length).toEqual(4);
        expect(random.split('').every(isUnique)).toBeTruthy();
    });
});
