const AnswerGenerator = require('../main/answer-generator');
    describe('generator number',()=>{
       it('should generate number',()=>{
           const isUnique = (item,index,array)=> {
               return array.lastIndexOf(item) === index;
           };
               const answer = AnswerGenerator.generator();
               expect(answer.length).toEqual(4);
               expect(answer.split('').every(isUnique)).toBeTruthy();
               expect(answer).not.toEqual(AnswerGenerator.generator());

       })
    });