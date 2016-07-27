const CompareNumber=require('./moudles/compareNumber');
const AnswerGenerator=require('./moudles/answerGenerator');

class Game{
    constructor() {
        this.answer = AnswerGenerator.generator();
        this.count = 6;

        process.stdin.setEncoding('utf8');
        process.stdin.on('data', (input)=> {
            if (!this.isrepetition(input)) {
                console.log('cannot input repetition number!');
                this.ask();
            }
            else if (this.answer === input.trim()) {
                console.log('Congratulations!');
                process.exit();
            }
            else {
                console.log(CompareNumber.checkNumber(input, this.answer));
                this.count--;
                if (this.isGameOver()) {
                    console.log('Game Over\n');
                    console.log(`Answer:${this.answer}`);
                    process.exit();
                } else {
                    this.ask();
                }
            }
        });
    }
    start(){
        console.log('Welcome!\n');
        this.ask();
    }
    ask(){
        console.log(`Please input your number(${this.count}):`)
    }
    isrepetition(input){
        return input.split('').every((item,index,array)=>{
            return array.lastIndexOf(item)===index;
        });
    }
    isGameOver() {
        return this.count === 0;
    }
}

new Game().start();
module.exports=Game;