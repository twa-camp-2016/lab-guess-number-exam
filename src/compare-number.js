class CompareNumber {
    static compare(input, answer) {
        const inputs = input.split("");
        const answers = answer.split("");

        const rightDigitsCount = inputs.filter(input=>answers.includes(input)).length;
        const x = inputs.filter(input=>inputs.indexOf(input) === answers.indexOf(input)).length;
        const y = rightDigitsCount - x;

        return `${x}A${y}B`;
    }
}

module.exports = CompareNumber;