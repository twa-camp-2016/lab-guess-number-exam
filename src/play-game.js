const AnswerGenerator = require('./answer-generator');
const CompareNumber = require('./compare-number');

class PlayGame {
    constructor() {
        this.answer = AnswerGenerator.getAnswer();
        this.chances = 6;

        process.stdin.resume();
        process.stdin.setEncoding('utf8');
        process.stdin.on('data', (input) => {
           if(!this.jude(input)) {
               console.log('Cannot input duplicate numbers!');
               this.ask();
           } else if(input.trim() === this.answer) {
               console.log('Congratulations!');
               process.exit()
           } else {
               console.log(CompareNumber.output(input, this.answer));
               this.chances --;
               if(this.isGameOver()) {
                   console.log('Game Over\n');
                   console.log(`Answer: ${this.answer}`);
               } else {
                   this.ask();
               }
           }
        });
    }

    start() {
        console.log('Welcome!\n');
        this.ask();
    }

    jude(input) {

        return input.split('').every((digit, index, array) => {
           return array.lastIndexOf(digit) === index;
        });
    }

    ask() {
        console.log(`Please input your number(${this.chances}): `)
    }

    isGameOver() {
        return this.chances === 0;
    }
}

module.exports = PlayGame;