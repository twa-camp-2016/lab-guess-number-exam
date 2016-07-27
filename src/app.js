const  CompareNumber = require('./compare-number');
const  GeneratorRandom = require('./generator-random');

function compare(answer,input){

    const result = CompareNumber.compareNumbers(answer,input);
    return result;
}

function generate(){

    return GeneratorRandom.generate();
}
exports.compare = compare;
exports.generate = generate;