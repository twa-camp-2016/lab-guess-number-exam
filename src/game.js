const CompareNumber = require('../src/compare-number');
const AnswerGenerator = require('../src/answer-generator');

class Game {
    constructor() {
        this.answer = AnswerGenerator.generate();
        this.chances = 6;

        process.stdin.resume();
        process.stdin.setEncoding('utf8');
        process.stdin.on('data', (input)=> {
            if (!this.validate(input)) {
                console.log('can not input duplicate number!');
                this.ask();
            }
            else {
                const result = CompareNumber.compare(input, this.answer);
                if (result === '4A0B') {
                    console.log('Congratulations!');
                    process.exit();
                }

                console.log(result);
                this.chances--;
                if (this.isGameOver()) {
                    console.log('Game Over!\n');
                    console.log(`Answer:${this.answer}`);
                    process.exit();
                }
                else {
                    this.ask();
                }
            }
        })
    }

    start() {
        console.log('Welcome!\n');
        this.ask();
    }

    ask() {
        console.log('Please input your number(6):');
    }

    validate(input) {
        return input.split('').every((item, index, array)=> {
            return array.lastIndexOf(item) === index;
        })
    }

    isGameOver() {
        return this.chances === 0;
    }
}

new Game().start();

module.exports = Game;