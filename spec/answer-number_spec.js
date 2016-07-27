const AnswerNumber = require('../src/answer-number');

describe("AnswerNumber",()=>{
    it("generator a number",()=>{
        const isUnique = (item,index,array)=>{
            return index === array.lastIndexOf(item);
        }
        const answer = AnswerNumber.generator();

        expect(answer.length).toEqual(4);
        expect(answer.split("").every(isUnique)).toBeTruthy();
        expect(AnswerNumber.generator()).not.toEqual(AnswerNumber.generator());
    })

})