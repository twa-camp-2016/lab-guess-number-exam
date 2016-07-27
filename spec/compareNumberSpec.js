/**
 * Created by chenying on 16-7-27.
 */
const ComparaNumber=require('../main/modules/compareNumber');
describe('compareNumber',()=>{
    const inputs='1234';
    it('compare the number',()=>{
        const answer='1234';
        const expectAnswer='4A0B';
        const compares=new ComparaNumber;
        expect(compares.print(inputs,answer)).toBe(expectAnswer);
    });
})