const compareNUmber = require('../main/compare-number');

describe('CompareNumber', ()=> {

    it('should print compare number', ()=> {
        [
            {
                answer: '1234',
                input: '4321',
                expected: '0A4B'
            },
            {
                answer: '1234',
                input: '1234',
                expected: '4A0B'
            },
            {
                answer: '1234',
                input: '5678',
                expected: '0A0B'
            },
            {
                answer: '1234',
                input: '1526',
                expected: '1A1B'
            }
        ].forEach(item=>{
            const result = compareNUmber.Compare(item.answer,item.input);
            expect(item.expected).toEqual(result);
        });
    });
});