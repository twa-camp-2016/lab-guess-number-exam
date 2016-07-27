/**
 * Created by chenying on 16-7-27.
 */
const Ramdom = require('../main/modules/randomNumber');
describe('randomNumber', ()=> {
    it('compare the number', ()=> {
        const unique=(item,index,array)=>{
            return array.lastIndexOf(item)===index;
        }

            expect(array.length).toBe(4);
            expect(unique.every(answer)).tobeTruthy;
    });
})