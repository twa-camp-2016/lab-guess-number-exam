const Compare = require('../src/compare');

describe('Compare', ()=> {

    it('should get result when user input a number ', ()=> {
        const answer = Compare.compare('1234',`1234`);
        expect(answer).toEqual('4A0B');
    });

    it('should get result when user input a number ', ()=> {
        const answer = Compare.compare('4321',`1234`);
        expect(answer).toEqual('0A4B');
    });

    it('should get result when user input a number ', ()=> {
        const answer = Compare.compare('5678',`1234`);
        expect(answer).toEqual('0A0B');
    });

    it('should get result when user input a number ', ()=> {
        const answer = Compare.compare('1243',`1234`);
        expect(answer).toEqual('2A2B');
    });


});