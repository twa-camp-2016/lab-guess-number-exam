const Answer = require('../main/answer-generator');

describe('Answer Generator', ()=> {

    it('print answer generator', ()=> {
        const isUnique = (item, index, array) => {
            return array.lastIndexOf(item) === index;
        };
        const answer = Answer.generator();
        expect(answer.length).toEqual(4);
        expect(answer.split('').every(isUnique)).toBeTruthy();
        expect(Answer.generator()).not.toEqual(Answer.generator());
        
    });
});