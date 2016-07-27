const AnswerGenerator = require('../src/models/AnswerGenerator');
const CompareNumber = require('../src/models/CompareNumber');

class Game {
    constructor() {
        this.answer = AnswerGenerator.generator();
        this.chance = 6;

        process.stdin.setEncoding('utf8');
        process.stdin.on('data', (input) => {
            if (!(this.test(input))){
                console.log('Cannot input duplicate numbers!');
                this.ask();
            } else {
                const result = CompareNumber.getCompareResult(input, this.answer);
                if (result === '4A0B') {
                    console.log('Congratulations!');
                    process.exit();
                } else {
                    console.log(result);
                    this.chance--;
                    if (this.chance === 0) {
                        console.log('Game Over\n');
                        console.log(`Answer:${this.answer}`);
                        process.exit();
                    } else {
                        this.ask();
                    }
                }
            }
        });
    }

    start() {
        console.log('Welcome!\n');
        this.ask();
    }

    ask() {
        console.log(`Please input your number(${this.chance}):`);
    }

    test(input) {
        return input.split('').every((digit, index, array) => {
            return array.lastIndexOf(digit) === index;
        });
    }
}

new Game().start();
module.exports = Game;