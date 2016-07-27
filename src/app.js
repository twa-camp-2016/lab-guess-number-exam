'use strict';
const CompareNumbers = require('./compare-numbers');
const GenerateAnswer = require('./answer-generator');

function compare(input,answer){
    const result = CompareNumbers.caculate(input,answer);

    return result;
}

function generate(){

    const result = GenerateAnswer.generateNumbers();

    return result;
}


exports.compare = compare;
exports.generate = generate;