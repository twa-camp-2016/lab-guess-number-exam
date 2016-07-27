const AnswerGecerator = require('../src/answer-generator');

describe('answer generator',()=>{
    it('corrct generator',()=>{
        const answers = AnswerGecerator.generator();
        const isUnique=((item,index,array) =>{
            return array.lastIndexOf(item) === index;
        });
        expect(answers.length).toEqual(4);
        expect(AnswerGecerator.generator()).not.toEqual(AnswerGecerator.generator());
        expect(answers.split('').every(isUnique)).toBeTruthy();
    });
})