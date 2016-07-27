class CompareNumber {
  static compareNumber(answer, userNumber) {
    const answers = answer.split('');
    const userNumbers = userNumber.split('');

    const rightDigitsCount = userNumbers.filter(c => answers.some(answer => answer === c)).length;
    const a = userNumbers.filter(c => userNumbers.indexOf(c) === answers.indexOf(c)).length;
    const b = rightDigitsCount - a;

    return `${a}A${b}B`;
  }
}

module.exports = CompareNumber;
