const AnswerGenerator = require('./answerGenerator');
const CompareNumber = require('./compareNumber');

class Game {
    constructor() {
        this.answer = AnswerGenerator.generate();
        this.chances = 6;

        process.stdin.setEncoding('utf8');
        process.stdin.on('data', (input) => {
            if (!this.validate(input)) {
                console.log('Cannot input duplicate numbers!');
                this.ask();
            }
            else if (input === this.answer) {
                console.log('Congratulations!');
            }
            else {
                console.log(CompareNumber.compareNumber(input, this.answer));
                this.chances--;
                if (this.isGameOver()) {
                    console.log('Game Over\n');
                    console.log(`Answer:${this.answer}`);
                    process.exit();
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

    ask() {
        console.log('Please input your number(6):');
    }

    validate(input) {
        return input.split('').every((digit, index, array) => {
            return array.lastIndexOf(digit) === index;
        });
    }

    isGameOver() {
        return this.chances === 0;
    }
}

new Game().start();

module.exports = Game;