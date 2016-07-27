const CompareNumber = require('../src/compare-number');

describe('CompareNumber', ()=> {
    const answer = '1234';
    it('should compare number', ()=> {
        [
            {
                input: '1234',
                result: '4A0B'
            },
            {
                input: '5678',
                result: '0A0B'
            },
            {
                input: '1243',
                result: '2A2B'
            },
            {
                input: '4321',
                result: '0A4B'
            }
        ].forEach((example)=> {
            const result = CompareNumber.compare(example.input,answer);
            expect(result).toEqual(example.result);
        })
    })
});