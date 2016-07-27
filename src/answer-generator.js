class AnswerGenerator{
    static generate(){
        const digits=[0,1,2,3,4,5,6,7,8,9];
        const result=[];
        for(let i=0;i<4;i++){
            const randomNum=parseInt(Math.random()*digits.length);
            result.push(digits.splice(randomNum,1)[0]);
        }
        return result;
    }
}

module.exports=AnswerGenerator;