const CompareNumber = require('../main/compare-number')

describe('CompareNumber',()=>{
    it('should return xAxB',()=>{
        [{
            input:'1234',
            answer:'1234',
            result:'4A0B'
        },{
            input:'1234',
            answer:'1256',
            result:'2A0B'
        },{
            input:'1234',
            answer:'4321',
            result:'0A4B'
        },{
            input:'1234',
            answer:'4231',
            result:'2A2B'
        },{
            input:'1234',
            answer:'5678',
            result:'0A0B'
        },{
            input:'1234',
            answer:'5643',
            result:'0A2B'
        },].forEach(example => {
            const result = CompareNumber.compare(example.input,example.answer);
            expect(result).toEqual(example.result);
        });
    });
});