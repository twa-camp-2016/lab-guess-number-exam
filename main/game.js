const answergenerator = require('./answergenerator');
const compareNumber = require('./compareNumber');

class Game {
    constructor() {
        this.answer = answergenerator.generator();
        this.length = 6;

        process.stdin.setEncoding('utf-8');
        process.stdin.on('data', (input) => {
            if (!this.validate(input)) {
                console.log('Cannot input duplicate numbers\n');
                this.ask();
            } else {
                const result = compareNumber.compareNumber(input, this.answer);
                if (result === '4A0B') {
                    console.log('Congratulations\n');
                    process.exit();
                } else {
                    console.log(result);
                    this.length--;
                    if (this.isGameOver()) {
                        console.log('Game Over\n');
                        process.exit();
                    } else {
                        this.ask();
                    }
                }
            }
        })
    }

    start() {
        console.log('Welcome\n');
        this.ask()
    }

    ask() {
        console.log(`Please input your number(${this.length}):\n`);
    }

    validate(input) {
        return input.split('').every((digit, index, array) => {
            return array.lastIndexOf(digit) === index && input.length === 4;
        })
    }

    isGameOver() {
        return this.length === 0
    }
}

new Game().start()

module.exports = Game;