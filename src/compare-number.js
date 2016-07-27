'use strict';

class CompareNumber {
  static compare(input, answer) {
    const result = {A: 0, B: 0};
    const inputArr = input.split('');
    const answerArr = answer.split('');

    inputArr.find((inputNum,index)=> {
      if(answerArr.some(answerNum=>inputNum === answerNum)){
        answerArr.indexOf(inputNum)===index? result.A++ : result.B++;
      }
    });

    return `${result.A}A${result.B}B`;
  }
}

module.exports = CompareNumber;