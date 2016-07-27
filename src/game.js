const AnswerGenerator = require('./answer-generator');
const CompareNumber = require('./compare-number');

class Game{
    constructor(){
        this.answer = AnswerGenerator.generate();
        this.chances = 6;

        process.stdin.setEncoding('utf8');
        process.stdin.on('data', (input) => {
            if(!this.validate(input)){
                console.log('Cannot input duplicate number');
                this.ask();
            }else if(input.trim() === this.answer){
                console.log('Congratulation');
                process.exit();
            }else{
                console.log(CompareNumber.compare(input, this.answer));
                this.chances--;

                if(this.isGameOver()){
                    console.log('Game Over\n');
                    console.log(`Answer:${this.answer}`);
                    process.exit();
                }else{
                    this.ask();
                }
            }
        })
    }

    start(){
        console.log('Welcome\n');
        this.ask();
    }

    ask(){
        console.log(`Please input your numbers(${this.chances}):`)
    }
    
    validate(input){
        return input.split('').every((item, index, array) => array.lastIndexOf(item) === index);
    }

    isGameOver(){
        return this.chances === 0;
    }
}

new Game().start();

module.exports = Game;