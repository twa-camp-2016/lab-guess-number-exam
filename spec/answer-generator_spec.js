'use strict';
const AnswerGenerator=require('../src/answer-generator.js');
describe('answer generator',()=>{
    it('should generator answer',()=>{
        const isUnique=(item,index,array)=>{
            return   array.lastIndexOf(item)===index;
        }
        const answer=AnswerGenerator.generator();
        expect(answer.split('').every(isUnique)).toBeTruthy();
        expect(AnswerGenerator.generator()).not.toEqual(AnswerGenerator.generator());
    });
});