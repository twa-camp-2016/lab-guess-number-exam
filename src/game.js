const AnswerGenerator = require('./answer-generator');
const CompareNumber = require('./compare-number');

class Game {
    constructor() {
        this.answer = AnswerGenerator.generate();
        this.chances = 6;

        process.stdin.resume();
        process.stdin.setEncoding('utf8');
        process.stdin.on('data', (input)=> {
            if (!this.vilidate(input)) {
                console.log('Cannot input repeat number');
                this.ask();
            }
            else if (input.trim() === this.answer) {
                console.log('Congratulation');
                process.exit();
            }
            else {
                console.log(CompareNumber.compare(input, this.answer));
                this.chances--;

                if (this.iaGameOver()) {
                    console.log('Game Over\n');
                    console.log(`Answer:${this.answer}`);
                    process.exit();
                }
                else {
                    this.ask();
                }
            }
        });
    }
    start() {
        console.log('Welcome\n');
        this.ask();
    }
    ask() {
        console.log(`please input your number(${this.chances})`);
    }

    vilidate(input) {
        return input.split('').every((item, index, array)=> {
            return array.lastIndexOf(item) === index
        });
    }

    iaGameOver() {
        return this.chances === 0;
    }

}

new Game().start();

module.exports = Game;