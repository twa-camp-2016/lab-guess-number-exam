class CompareNumber {
  static compare(input, answer) {
    const inputs = input.split('');
    const answers = answer.split('');
    const rightCount = inputs.filter(input => inputs.indexOf(input) === answers.indexOf(input)).length;
    const sameCount = inputs.filter(input => answers.some(b=>b === input)).length;
    const errorCount = sameCount - rightCount;
    return `${rightCount}A${errorCount}B`;
  }
}

module.exports = CompareNumber;