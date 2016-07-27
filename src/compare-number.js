'use strict'
class CompareNumber{
    static compare(input,answer){
        const inputs=input.split('');
        const answers=answer.split('');
        let a=0;
        let b=0;
        answers.map(answer=>{
            const input=inputs.find(input=>input===answer);
            if(input){
                inputs.indexOf(input)===answers.indexOf(answer)?a++:b++;
            }
        })
        return `${a}A${b}B`;
    }
}
module.exports=CompareNumber;