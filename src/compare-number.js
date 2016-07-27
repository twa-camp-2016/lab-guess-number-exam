class CompareNumber {
    static output(input, answer) {
        const inputs = input.split('');
        const answers = answer.split('');

        const count = inputs.filter(input => answers.includes(input)).length;

        const countA = inputs.filter(input => answers.indexOf(input) === inputs.indexOf(input)).length;
        const countB = count - countA;

        return `${countA}A${countB}B`
    }
}

module.exports = CompareNumber;