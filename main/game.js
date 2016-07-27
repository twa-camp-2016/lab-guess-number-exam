const AnswerGenerator = require('./answer-generator');
const CompareNumber = require('./compare-number');

class Game{
    constructor(input){
        this.answer = AnswerGenerator.generate();
        this.chances = 6;

        process.stdin.setEncoding('utf8');
        process.stdin.on('data',(input)=>{
            if (!this.Validate(input)){
                console.log('Cannot input duplicate numbers!');
                this.ask();
            }else {
                const result = CompareNumber.compare(input,this.answer);
                this.chances --;
                if (result === '4A0B'){
                    console.log('Congratulations!');
                    process.exit();
                }else {
                    if (this.isGameOver()){
                        console.log('Game Over\n');
                        console.log(`Answer:${this.answer}`);
                        process.exit();
                    }else {
                        console.log(result);
                        this.ask();
                    }
                }
            }
        })
    }

    start(){
        console.log('Welcome!\n');
        this.ask();
    }

    ask(){
        console.log(`Please input your number(${this.chances}):`);
    }

    Validate(input){
        const validate = (item,index,array)=>{
            return array.lastIndexOf(item) === index;
        }

        return input.split('').every(validate);
    }


    isGameOver(){
        return this.chances === 0;
    }
}

new Game().start();

module.exports = Game;