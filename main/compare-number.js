class CompareNumber{
    static compare(input,answer){
        const inputs = input.split('');
        const answers = answer.split('');

        const rightNumber = inputs.filter(c => answers.includes(c)).length;
        const x = inputs.filter(c => inputs.indexOf(c) === answers.indexOf(c)).length;
        const y = rightNumber - x;

        return `${x}A${y}B`;
    }
}

module.exports = CompareNumber;