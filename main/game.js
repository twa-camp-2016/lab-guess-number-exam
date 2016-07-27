const AnswerGenerator = require('./answer-generator');
const CompareNumber = require('./compare-number');

class Game{
    constructor(){
        this.answer = AnswerGenerator.generator();
        this.chances = 6;
        
        process.stdin.resume();
        process.stdin.setEncoding('utf8');
        process.stdin.on('data',(input)=>{
            input = input.trim();
            if(!this.validate(input)){
                console.log('Cannot input duplicate numbers!');
                this.ask();
            }else if(input === this.answer){
                console.log('Congratulations!');
            }else{
                console.log(CompareNumber.compareNumber(input, this.answer));
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
        console.log('Welcome!\n');
        this.ask();
    }
    ask(){
        console.log('Please input your number(6):');
    }
    
    validate(input){
        if(input.length === 4){
            return input.split('').every((digit, index, array) => {
                return array.lastIndexOf(digit) === index
                    && typeof parseInt(input)==='number';
            });
        }else {
            return false;
        }
    }
    isGameOver(){
        return this.chances === 0;
    }
}

new Game().start();
module.exports  = Game;