const AnswerGenerator = require('./answer-generator');
const CompareNumber = require('./compare-number');

class Game {
    constructor() {
        this.answer = AnswerGenerator.generator();
        this.count = 6;
        process.stdin.setEncoding('utf8');
        process.stdin.on('data', (input)=> {
            if (!this.valable(input)) {
                console.log('Cannot input duplicate numbers!');
                this.printNum();
            }
            else {
                const result = CompareNumber.Compare(this.answer, input);
                if(result === '4A0B'){
                    console.log('Congratulations!');
                    process.exit();
                }
                else{
                    console.log(result);
                    this.count--;
                    if (this.over()) {
                        console.log('Game Over\n');
                        console.log(`Answer:${this.answer}`);
                        process.exit();
                    } else {
                        this.printNum();
                    }
                }
            }
        });
    }

    start() {
        console.log('Welcome!');
        this.printNum();
    }

    printNum() {
        console.log(`Please input your number(${this.count}):`);
    }

    valable(input) {
        return input.split('').every((item, index, array)=> {
            return input.lastIndexOf(item) === index;
        })
    }

    over() {
        return this.count === 0;
    }
}

new Game().start();

module.exports = Game;

