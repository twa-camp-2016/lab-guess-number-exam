const Answer = require('../src/answer-result');
describe('answer',()=>{
    it('should put an answer',()=>{
        const isUnque=(item,index,array)=>{
            return array.lastIndexOf(item) === index;
        };
        const result = Answer.putAnswer();
        expect(result.length).toEqual(4);
        expect(result.split('').every(isUnque)).toBeTruthy();
        expect(Answer.putAnswer()).not.toEqual(Answer.putAnswer());
    })
});