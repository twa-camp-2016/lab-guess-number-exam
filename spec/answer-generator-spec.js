const AnswerGenerator = require('../src/answer-generator');

describe('AnswerGenerator', ()=> {
    it('answer generator', ()=> {
        const isUnique = (item, index, array)=> {
            return array.lastIndexOf(item) === index;
        };

        const result = AnswerGenerator.generate();
        expect(result.length).toEqual(4);
        expect(result.split('').every(isUnique)).toBeTruthy();
        expect(AnswerGenerator.generate()).not.toEqual(AnswerGenerator.generate());
    })
})