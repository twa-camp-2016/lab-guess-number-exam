const compare = require('../main/compareNumber');
const answergenerator = require('../main/answergenerator');

describe('compareNumber',() => {
    it('should print correct XAXB',() => {
        expect(compare.compareNumber('1234','1234')).toBe('4A0B');
    })
    it('should print correct XAXB',() => {
        expect(compare.compareNumber('1234','4321')).toBe('0A4B');
    })
    it('should print correct XAXB',() => {
        expect(compare.compareNumber('1234','1256')).toBe('2A0B');
    })
})


describe('answergenerator',() => {
    it('should print correct',() => {

        const isUnique = (item, index, array) => {
            return array.lastIndexOf(item) === index;
        }

        const answer = answergenerator.generator();
        expect(answer.length).toEqual(4);
        expect(answer.split('').every(isUnique)).toBeTruthy();
        expect(answergenerator.generator()).not.toEqual(answergenerator.generator());
        
    })
})

