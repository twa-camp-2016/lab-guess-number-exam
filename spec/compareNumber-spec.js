const CompareNumber=require('../src/moudles/compareNumber');

describe('compare number',()=> {
    it('commpare number',()=>{
        [{
            input: '1234',
            answer: '1234',
            result: '4A0B'
        },
            {
                input: '1278',
                answer: '1234',
                result: '2A0B'
            },
            {
                input: '1243',
                answer: '1234',
                result: '2A2B'
            },
            {
                input: '1234',
                answer: '1789',
                result: '1A0B'
            }].forEach(example=> {
            const result = CompareNumber.checkNumber(example.input, example.answer);
            expect(result).toEqual(example.result);
        });
    })

});
