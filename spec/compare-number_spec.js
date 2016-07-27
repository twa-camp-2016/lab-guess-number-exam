'use strict'
const CompareNumber=require('../src/compare-number');
describe('compare number',()=>{
    it('should compare number',()=>{
        [{
            input:'1234',
            answer:'1234',
            result:'4A0B'
        },{
            input:'1234',
            answer:'4321',
            result:'0A4B'
        },{
            input:'1234',
            answer:'5678',
            result:'0A0B'
        }].forEach(item=>{
            const result=CompareNumber.compare(item.input,item.answer);
            expect(result).toEqual(item.result);
        })
    })
})