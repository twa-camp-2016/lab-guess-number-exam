const CompareNumber = require('../main/compare-number');
describe('guess-number', () => {
    it('should test correct inputs', () => {
        [
            {
                input: '1234',
                result: '4A0B'
            },
            {
                input: '4321',
                result: '0A4B'
            },
            {
                input: '5678',
                result: '0A0B'
            },
            {
                input: '2564',
                result: '1A1B'
            }
        ].forEach((example) => {
            expect(CompareNumber.compareNumber(example.input,'1234')).toEqual(example.result);
        });
    });
});