const app = require('../src/app');

describe('answer-generater',()=>{

   it("should generate answer",()=>{
       const isUnique = (item,index,array) =>{
            return array.lastIndexOf(item)===index;
       };

       const result = app.generate();

       expect(result.length).toBe(4);
       expect(result.split('').every(isUnique)).toBeTruthy();
       expect(app.generate()).not.toEqual(app.generate());
   });
});
