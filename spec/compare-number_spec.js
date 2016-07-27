const CompareNumber = require('../src/compare-number');
describe('compare number', ()=> {
    it('returns xAxB', ()=> {
        [{
            input: '1234',
            answer: '1234',
            result: '4A0B'
        }, {
            input: '1234',
            answer: '4321',
            result: '0A4B'
        }, {
            input: '1234',
            answer: '1243',
            result: '2A2B'
        }].forEach(example=>{
            expect(CompareNumber.compare(example.input,example.answer)).toEqual(example.result);
        });
    })
});