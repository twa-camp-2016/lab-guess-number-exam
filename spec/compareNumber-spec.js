const CompareNumber = require('../src/compareNumber');

describe('guess' , () => {
    const answer = '1234';

    it('should be all right', () => {
        const input = '1234';
        const result = CompareNumber.compareNumber(answer,input);
        const expectResult = '4A0B';
        
        expect(result).toEqual(expectResult);
    });

    it('should be all wrong', () => {
        const input = '5678';
        const result = CompareNumber.compareNumber(answer,input);
        const expectResult = '0A0B';

        expect(result).toEqual(expectResult);
    });

    it('should be some right', () => {
        const input = '1839';
        const result = CompareNumber.compareNumber(answer,input);
        const expectResult = '2A0B';

        expect(result).toEqual(expectResult);
    });
});