const AnswerGenerator = require('./answer-generator');
const CompareNumber = require('./compare-number');

class Game{

    constructor(){

        this.answer = AnswerGenerator.generate();
        this.chances = 6;

        process.stdin.setEncoding('utf8');
        process.stdin.on('data',(input)=>{

            if(!this.validate(input)){
                console.log('Can not repeat!');
                this.ask();
            }else {
                const result = CompareNumber.compare(input, this.answer);
                if (result === '4A0B'){
                    console.log('Congrational!');
                    process.exit();
                }else {
                    console.log(result);
                    this.chances --;
                    if (this.chances === 0){
                        console.log('Game Over!');
                        console.log('Answer:1234');
                        process.exit();
                    }
                    this.ask();
                }
            }
        });


    }
     validate(input){

        return input.split('').every((element, index, array)=>index === array.lastIndexOf(element));
    }
    ask(){
        console.log(`Please input your number(${this.chances})`);
    }
    start(){
        console.log('Welcome!');
        this.ask();
    }
}
new Game().start();
module.exports = Game;