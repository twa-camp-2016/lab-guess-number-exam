const CompareNumber = require('../src/compare-number');

describe('Compare number', () => {
    it('return xAxB', () => {
        [
            {
                input: '1234',
                answer: '1234',
                result: '4A0B'
            },
            {
                input: '1234',
                answer: '1256',
                result: '2A0B'
            },
            {
                input: '1234',
                answer: '1243',
                result: '2A2B'
            },
            {
                input: '1234',
                answer: '4321',
                result: '0A4B'
            },
            {
                input: '1234',
                answer: '1246',
                result: '2A1B'
            },
        ].forEach((example) => {
            const result = CompareNumber.compare(example.input, example.answer);
            expect(result).toEqual(example.result)
        })
    })
});