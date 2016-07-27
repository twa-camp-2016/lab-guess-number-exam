const AnswerGenerator = require('./answer');
const CompareNumber = require('./compare');
const scanf = require('scanf');

class Game {

    constructor() {
        this.answer = AnswerGenerator.generate();
        this.chance = 6;
        this.start();
        while (this.chance > 0) {
            let output = ``;
            const input = Game.getInput();
            if (!this.judeRepeate(input)) {
                console.log(`Cannot input duplicate numbers!\n`);
                return;
                this.getAsk();
            }
            else {
                const result = CompareNumber.compare(input, this.answer);
                output = result === '4A0B' ? `Congratulations!` : `${result}`;
                this.chance = output === result ? this.chance - 1 : 0;
                console.log(`${output}\n`);
                if (this.chance === 0) {

                    console.log(`Game Over`);
                    console.log(`Answer:1234`);

                }
                else {
                    this.getAsk();
                }
            }
        }
    }


    start() {
        console.log('Welcome!\n');
        this.getAsk();

    }

    static getInput() {
        return scanf('%s');
    }

    judeRepeate(input) {
        return input.split('').every((digit, index, array)=> {
            return array.lastIndexOf(digit) === index
        });
    }

    getAsk() {
        console.log(`Please input your number(${this.chance}):`);
    }
}


module.exports = Game;


