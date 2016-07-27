const AnswerGenerator = require('./answer-generator');
const CompareNumber = require('./compare-number');

class Game {

    constructor() {
        this.answer = AnswerGenerator.generator();
        this.chance = 6;

        process.stdin.resume();
        process.stdin.setEncoding('utf8');
        process.stdin.on('data', (inputs)=> {
            if (!this.validate(inputs)) {
                console.log('Cannot input double number:\n');
                this.ask();
            } else if (inputs === this.answer) {
                console.log('Congratulations!\n');
            } else {
                console.log(CompareNumber.compare(this.answer, inputs));
                this.chance--;
                if(this.isGameOver()) {
                    console.log('Game Over!\n');
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
        console.log('Please input your number:\n');
    }

    validate(inputs) {
        return inputs.split('').every((item, index, array) => {
            return array.lastIndexOf(item) === index;
        });
    }

    isGameOver() {
        return this.chance === 0;
    }
}

module.exports = Game;

