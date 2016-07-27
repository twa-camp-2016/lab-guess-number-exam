'use strict'
const AnswerGenerator=require('../src/answer-generate');
describe('generator answer',()=>{
    it('should generate answer',()=>{
        const isUnique=(item,index,array)=>{
            return array.indexOf(item)===index;
        }
        const result=AnswerGenerator.generate();
        expect(result.length).toEqual(4);
        expect(result.split('').every(isUnique)).toBeTruthy();
        expect(AnswerGenerator).not.toEqual(AnswerGenerator.generate());
    })
})