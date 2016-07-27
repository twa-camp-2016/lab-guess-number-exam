class CompareNumber {

  static compareNumber(input, answer) {
    const inputs = input.split('');
    const answers = answer.split('');

    const randomNumber = inputs.filter(c => answer.includes(c)).length;
    const x = inputs.filter(c => answers.indexOf(c) === inputs.indexOf(c)).length;
    const y = randomNumber - x;

    return `${x}A${y}B`;
  }
}

module.exports = CompareNumber;