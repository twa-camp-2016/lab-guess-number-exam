const Answer = require('./answer-result');
const CompareNumber = require('./compare-number');
class Game {
    constructor() {
        this.answer = Answer.putAnswer();
        this.chances = 6;
        console.log('Welcome!\n');
        this.ask();
        process.stdin.resume();
        process.stdin.setEncoding('utf8');
        process.stdin.on('data', (input)=> {
            const result = CompareNumber.compare(input, this.answer);
            if (!this.isUnque(input)) {
                console.log('Cannot input duplicate numbers!');
                this.ask();
            }
            else if (result === '4A0B') {
                console.log('Congratulations!');
                process.exit();
            }
            else {
                console.log(result);
                this.chances--;
                if (this.chances === 0) {
                    console.log('Game Over\n');
                    console.log('answer:'+this.answer);
                    process.exit();
                }
                else {
                    this.ask();
                }
            }
        })
    }

    isUnque(input) {
        return input.split('').every((item, index, array)=> {
                return array.lastIndexOf(item) === index;
            }
        )
    }

    ask() {
        console.log(`Please input your number(${this.chances}):`);
    }
}


new Game();
module.exports = Game;