//const CompareNumber = require('../src/compare-number');
const CompareNumber = require('../src/app');

describe('compareNumber',()=>{

    it("should print XAXB",()=>{

        [{
            input:'1234',
            answer:'1234',
            result:'4A0B'
        },{
            input:'4321',
            answer:'1234',
            result:'0A4B'
        },{
            input:'5678',
            answer:'1234',
            result:'0A0B'
        }].forEach(element =>{
            const output = CompareNumber.compare(element.answer,element.input);
            expect(output).toEqual(element.result);
        })
    });
});