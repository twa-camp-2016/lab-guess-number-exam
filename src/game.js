const AnswerNumber = require('./answer-number');
const CompareNumber = require('./compare-number');

class Game {
    constructor() {
        this.answer = AnswerNumber.generator();
        this.chances = 6;

        process.stdin.resume();
        process.stdin.setEncoding("utf8");
        process.stdin.on("data", input=> {
            if (!this.ifRepeat(input)) {
                console.log("Cannot input duplicate numbers!")
                this.ask();
            }
            else {
                const result = CompareNumber.compare(input, this.answer);
                if (result === '4A0B') {
                    console.log("Congratulations!");
                    process.exit();
                }
                this.chances--;
                if (this.runout()) {
                    console.log("Game Over");
                    console.log(`Answer:${this.answer}`);
                    process.exit();
                } else {
                    console.log(result);
                    this.ask();
                }


            }
        })
    }

    start() {
        console.log("Welcome!\n");
        this.ask();
    }

    ifRepeat(input) {
        const inputs = input.split("");
        return inputs.every(input=> {
            return inputs.indexOf(input) === inputs.lastIndexOf(input);
        })
    }

    ask() {
        console.log(`Please input your number(${this.chances}):`)
    }

    runout() {
        if (this.chances === 0) {
            return 1;
        }
        return 0;
    }
}

const game = new Game();

game.start();
module.exports = Game;