const  CompareNumber = require('./compare-number');

function compare(answer,input){

    const result = CompareNumber.compareNumbers(answer,input);
    return result;
}

exports.compare = compare;
