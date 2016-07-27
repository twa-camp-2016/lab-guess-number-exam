class CompareNumber{
  
  static compare(answer,input){
    const answers = answer.split('');
    const inputs = input.split('');

    const right = inputs.filter(c => answers.some(a => a===c)).length;
    const countA = inputs.filter(c => answers.indexOf(c) === inputs.indexOf(c)).length;

    return `${countA}A${right-countA}B`
  }
}

module.exports = CompareNumber;