const GeneratorRandom = require('../src/app');

describe('generator random',()=>{

    it("should generate random",()=>{
        const isUnique = (item,index,array)=>{
            return array.lastIndexOf(item) === index
        };


        const result = GeneratorRandom.generate();
        expect(result.length).toEqual(4);
        expect(result.split('').every(isUnique)).toBeTruety;

        expect(GeneratorRandom.generate()).not.toEqual(GeneratorRandom.generate());
    });
});
