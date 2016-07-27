const CompareNumber = require('../src/models/CompareNumber');

describe('CompareNumber', () => {

    const test = [
        {
            input: '1234',
            answer: '1234',
            result: '4A0B'
        },
        {
            input: '1234',
            answer: '4321',
            result: '0A4B'
        },
        {
            input: '1235',
            answer: '1234',
            result: '3A0B'
        }
    ].forEach((item) => {
        const result = CompareNumber.getCompareResult(item.input, item.answer);
        expect(result).toEqual(item.result);
    });
});
