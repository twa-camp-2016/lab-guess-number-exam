class  CompareNumber{
    static compareNumber(input,answer){
        const inputs=input.split('');
        const answers=answer.split('');

        const digitCount=inputs.filter(c=>answers.includes(c)).length;
        const x=inputs.filter(c=>input.indexOf(c)===answer.indexOf(c)).length;
        const y=digitCount-x;
        return `${x}A${y}B`
    }
}

module.exports=CompareNumber;