const CompareNumbers = require('./compare-numbers');
const GenerateAnswer = require('./answer-generator');

class Game {
    constructor() {
        this.answer = GenerateAnswer.generateNumbers();
        this.chances = 6;

        process.stdin.setEncoding('utf-8');
        process.stdin.on('data', (input)=> {

            if (!this.validated(input)) {
                console.log("Can not input duplicated numbers");
                this.ask();
            }
            else {
                const result = CompareNumbers.caculate(this.answer, input);
                if (result === "4A0B") {
                    console.log("Congratulations!");
                    process.exit();
                }
                else {
                    console.log(result);
                    this.chances--;
                    if (this.isGameOver()) {
                        console.log('Game over!\n');
                        console.log(`Answer:${this.answer}`);
                        process.exit();
                    }
                    else {
                        this.ask();
                    }

                }
            }
        });
    }

    validated(input) {

        return input.split('').every((digit, index, array) => {
            return array.lastIndexOf(digit) === index;
        });
    }

    ask() {
        console.log(`Please input your number(${this.chances}):`);
    }

    start() {
        console.log('Welcome!\n');
        this.ask();
    }
    isGameOver(){
        return this.chances === 0;
    }

}

new Game().start();


module.exports = Game;

