const AnswerGenerator = require('../src/answer-generator');

describe('answer generator',()=>{

    it('should return right',()=>{
        const result = AnswerGenerator.generate();

        const isUnique = (element,index,array)=>{
            return index === array.lastIndexOf(element);
        };
        expect(result.length).toBe(4);
        expect(result.split('').every(isUnique)).toBeTruthy();
        expect(result).not.toEqual(AnswerGenerator.generate());
    })
});