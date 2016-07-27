const AnswerGenerator=require('../src/moudles/answerGenerator');

describe('Answer Generator',()=>{
   it('build answer',()=>{
       const isUniqe=(item,index,array)=>{
           return array.lastIndexOf(item)===index;
       };
       const answer=AnswerGenerator.generator();
       expect(answer.length).toBe(4);
       expect(answer.split('').every(isUniqe)).toBeTruthy();
       expect(AnswerGenerator.generator()).not.toEqual(AnswerGenerator.generator());
   }) ;
});