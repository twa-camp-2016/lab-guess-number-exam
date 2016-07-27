const GeneratorRandom = require('./generator-random');
const CompareNumber = require('./compare-number');
class Game {
    constructor() {
        this.answer = GeneratorRandom.generate();
        this.chances = 6;

        process.stdin.setEncoding('UTF-8');
        process.stdin.on('data', (input)=> {
            if (!validated) {
                console.log("Can not input duplicated numbers");
                this.ask();
            }
            else {
                const result = CompareNumber.compareNumbers(this.answer,input);
                if (result === "4A0B") {
                    console.log("Congratulations!");
                    process.exit();
                }
                else {
                    console.log(result);
                    this.chance--;
                    if (this.isGameOver()) {
                        console.log("Game Over!");
                    }
                }
            }
        });
    }

    validated() {
        return (item, index, array)=> {
            return array.lastIndexOf(item) === index
        };
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
