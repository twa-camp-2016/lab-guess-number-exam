const CompareNumber = require('../src/compare-number');

describe('compare number', ()=> {
    const answers = '1234';
    it('print 4A0B', ()=> {
        const inputs = '1234';
        const result = CompareNumber.compare(answers, inputs);
        expect(result).toEqual('4A0B');
    });
    it('print 0A4B', ()=> {
        const inputs = '4321';
        const result = CompareNumber.compare(answers, inputs);
        expect(result).toEqual('0A4B');
    });
    it('print 0A0B', ()=> {
        const inputs = '5678';
        const result = CompareNumber.compare(answers, inputs);
        expect(result).toEqual('0A0B');
    });
});