const app = require('../src/app');

describe('compareNumbers',()=>{

    it("should return XAXB",()=>{
       [
           {
               input:'1234',
               answer:'1234',
               result:'4A0B'

           },
           {
               input:'4321',
               answer:'1234',
               result:'0A4B'
           },
           {
               input:'5678',
               answer:'1234',
               result:'0A0B'
           }
       ].forEach(example =>{

           const output = app.compare(example.input,example.answer);

           expect(output).toEqual(example.result);
       });

    });
});