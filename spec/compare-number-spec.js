const CompareNumber = require('../src/compare-number');

describe('Compare number', () => {
    it('return xAxB', () => {
        [
            {
                input: '1234',
                answer: '1234',
                result: '4A0B'
            }
        ].forEach((example) => {
            const result = CompareNumber.compare(example.input, example.answer);
            expect(result).toEqual(example.result)
        })
    })
});