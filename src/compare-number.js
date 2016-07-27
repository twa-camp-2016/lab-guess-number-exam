class CompareNumber {
    static compareNumbers(answer, input) {
        const answerArray = answer.split('');
        const inputArray = input.split('');

        const rightNumbers = answerArray.filter(c => inputArray.includes(c)).length;

        const x = answerArray.filter(c => inputArray.indexOf(c) === answerArray.indexOf(c)).length;

        const y = rightNumbers -x;

        return `${x}A${y}B`;
    }
}

module.exports = CompareNumber;