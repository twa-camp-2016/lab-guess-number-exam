'use strict';
const AswerGenerator = require('../src/answer-generator');

describe('AswerGenerator',() =>{
   it('should generator number',() => {
       const result = AswerGenerator.generate();
       expect(result.length).toEqual(4);
       expect(result.split('').every((item,index,array)=>{return array.lastIndexOf(item)===index})).toBeTruthy();
       expect(AswerGenerator.generate()).not.toEqual(AswerGenerator.generate());
   })
});