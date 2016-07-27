'use strict'
class RamdomAnswer {
    static generate() {
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        const answer = [];
        for (let i = 0; i < 4; i++) {
            const number = parseInt(Math.random() * array.length);
            answer.push(array.splice(number,1));
        }
        return answer;
    }
}
module.exports=RamdomAnswer;