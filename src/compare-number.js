class CompareNumber{
    static compare(input,answer){
        const inputs = input.split('');
        const answers = answer.split('');
        const rightNumberCount = inputs.filter(a=>answers.includes(a)).length;
        const a = inputs.filter(a=>answer.indexOf(a)===inputs.indexOf(a)).length;
        const b =rightNumberCount-a;
        return `${a}A${b}B`;
    }
}

module.exports = CompareNumber;