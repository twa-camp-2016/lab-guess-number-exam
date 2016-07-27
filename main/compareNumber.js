class compareNumber {
    static compareNumber(input,answer) {
        
        const inputs = Array.from(input);
        const answers = Array.from(answer);

        const rightCount = inputs.filter(input => answers.includes(input)).length;

        const countA = inputs.filter(input => answers.indexOf(input) === inputs.indexOf(input)).length;

        const countB = rightCount - countA;

        return `${countA}A${countB}B`;
    }
}

module.exports = compareNumber;