class CompareNumber {
    static compare(input,answer){
        const inputs = input.split('');
        const answers = answer.split('');
        
        const rightDigitsNumber = inputs.filter(c => answers.includes(c)).length;
        const a = inputs.filter(c => inputs.indexOf(c) == answers.indexOf(c)).length;
        const b = rightDigitsNumber - a;
        return `${a}A${b}B`;
    }
}
module.exports = CompareNumber;