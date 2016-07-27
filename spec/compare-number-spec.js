const CompareNumber=require('../src/compare-number')
describe('compare',()=>{
    
    it('comper',()=>{
        [{
            input: '1234',
            answer: '1234',
            result: '4A0B'
        }, {
            input: '5678',
            answer: '1234',
            result: '0A0B'
        }, {
            input: '1243',
            answer: '1234',
            result: '2A2B'

        }, {
            input: '1234',
            answer: '4123',
            result: '0A4B'
        }].forEach(example=>{
            const result=CompareNumber.compareNumber(example.input,example.answer);
            expect(result).toEqual(example.result);
        })
    })
    
});