
const  AnswerGenerator=require('../src/answer-generator')

describe('generator',()=>{
    it('generator',()=>{

        const isUnit=(item,index,array)=>{
            return array.lastIndexOf(item)===index
        };
        

        const result=AnswerGenerator.generate();
        expect(result.length).toEqual(4);
        expect(result.every(isUnit)).toBeTruthy();
        expect(AnswerGenerator.generate()).not.toEqual(AnswerGenerator.generate());


    })
});