
class AnswerGenerator{
    
   static generate(){
        const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const answer = [];
        for (let i = 0;i<4;i++){
            answer.push(number.splice(Math.random()*number.length,1)[0]);
        }
        return answer.join('');
    }
}
module.exports = AnswerGenerator;