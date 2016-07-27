const CompareNumber = require('../src/compare-number');

describe('CompareNumber', () => {
   it('should return *A*B', () => {
       const results = [
           {
               input: '1234',
               answer: '1234',
               output: '4A0B'
           },
           {
               input: '5678',
               answer: '1234',
               output: '0A0B'
           },
           {
               input: '1267',
               answer: '1234',
               output: '2A0B'
           }
       ];
       
       results.forEach((result) => {
           expect(CompareNumber.output(result.input, result.answer)).toEqual(result.output);
       });
   }); 
});