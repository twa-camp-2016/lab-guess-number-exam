const CompareNumber = require('../src/campare-number');

describe('Compare Number', () => {
    it('should return xAxB', () => {
        [{
            input:'1234',
            answer:'1234',
            result:'4A0B'
        },{
            input:'1234',
            answer:'5678',
            result:'0A0B'
        },{
            input:'1234',
            answer:'1243',
            result:'2A2B'
        },{
            input:'1234',
            answer:'2341',
            result:'0A4B'
        },{
            input:'1234',
            answer:'1245',
            result:'2A1B'
        }].forEach(example => {
            const result = CompareNumber.compare(example.input,example.answer);
            expect(example.result).toEqual(result);
        })
    })
})