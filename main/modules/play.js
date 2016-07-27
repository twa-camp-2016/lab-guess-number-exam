/**
 * Created by chenying on 16-7-27.
 */
const Input = require('./input');

class Play {
    static playGame(answer, i) {

        const input = Input.getInput();
        if (Judege.judge(input)) {
            const compareNumber = new CompareNumber();
            const print = compareNumber.print(input, answer);
            if(judge.judge(print)){
                return ;
            }
        } else {
            console.log('Cannot input illegal numbers!\n');
            i++;
        }
        return i;
    }
}
module.exports = Play;
