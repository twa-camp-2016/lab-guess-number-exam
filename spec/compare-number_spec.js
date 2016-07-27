'use strict';
const CompareNumber=require('../src/compare-number.js');
describe('conmpare number',()=>{
    [{input:'5678',
      answer:'12341',
      result:'0A4B'},
        {input:'1234',
            answer:'1234',
            result:'4A0B'}].forEach(element=>{
        const result=CompareNumber.compare(element.input,element.answer);
        expect(result).toEqual(element.result);
    });
});