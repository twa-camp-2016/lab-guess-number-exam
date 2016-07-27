'use strict';
class CompareNumber{
    static compare(input,answer){
        
        const inputs=input.split('');
        const answers=answer.split('');
        
        let rightDigitCount=inputs.filter(c=>answer.includes(c)).length;
        let x=inputs.filter(c=>inputs.indexOf(c)===answers.indexOf(c)).length;
        let y=rightDigitCount-x;
        
        return`${x}A${y}B`;
    }
}

module.exports=CompareNumber;