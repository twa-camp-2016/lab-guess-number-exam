class CompareNumber {
    static Compare(answer, input) {
        const answers = this.answer.split('');
        const inputs = this.input.split('');

        const rightNumber = answers.filter(c=>inputs.includes(c)).length;
        const a = answers.filter(c=>answers.indexOf(c) === inputs.indexOf(c)).length;
        const b = rightNumber - a;
        
        return `${a}A${b}B`;
    }
}
module.exports = CompareNumber;