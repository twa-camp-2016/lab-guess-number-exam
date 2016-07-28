const AnswerGenerator = require('../main/answer-generator');

describe('AnswerGenerator',()=>{
    it('should generate answer',()=>{
        const isUnique = (item,index,array)=>{
            return array.lastIndexOf(item)=== index;
        };

        const answer = AnswerGenerator.generate();
        expect(answer.length).toEqual(4);
        expect(answer.split('').every(isUnique)).toBeTruthy();
        expect(AnswerGenerator.generate).not.toEqual(AnswerGenerator.generate());
    });
});