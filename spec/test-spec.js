const answergenerator = require('../main/answergenerator');

describe('answergenerator',() => {
    it('should print correct XAXB',() => {
        expect(answergenerator.generator('1234','1234')).toBe('4A0B');
    })
    it('should print correct XAXB',() => {
        expect(answergenerator.generator('1234','4321')).toBe('0A4B');
    })
    it('should print correct XAXB',() => {
        expect(answergenerator.generator('1234','1256')).toBe('2A0B');
    })
})