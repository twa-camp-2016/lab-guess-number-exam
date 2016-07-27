const CompareNumber = require('../src/compare-number');

describe('CompareNumber', ()=> {
    it('compare number', ()=> {
        [   
            {
                item: '5678',
                answer: '1234',
                result: '0A0B'
            },
            {
                item: '1234',
                answer: '1234',
                result: '4A0B'
            },
            {
                item: '4321',
                answer: '1234',
                result: '0A4B'
            },
            {
                item: '1243',
                answer: '1234',
                result: '2A2B'
            }].forEach(example=> {
            const result = CompareNumber.compare(example.item, example.answer);
            expect(result).toEqual(example.result);
        })
    })
});