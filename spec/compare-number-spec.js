const CompareNumber = require('../src/compare-number');

describe('compare number',()=>{

    it('should retuen xAXB',()=>{

        [
            {input:'7456',answer:'2345',result:'0A2B'},
            {input:'7890',answer:'1243',result:'0A0B'}
        ].forEach(element=>{
            const number = CompareNumber.compare(element.input,element.answer);
            expect(number).toEqual(element.result);
        })
    })
});
