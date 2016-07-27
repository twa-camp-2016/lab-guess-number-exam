'use strict';
class AnswerGenerator{
    static generator(){
        let digits=[0,1,2,3,4,5,6,7,8,9];
        let result = [];
        let random=parseInt(Math.random()*digits.length);
        result.push(digits.splice(random,1)[0]);
        return result.join('');

    }
}

module.exports=AnswerGenerator;