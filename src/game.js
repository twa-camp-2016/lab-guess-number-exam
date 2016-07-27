const AnswerGenerate = require('../src/answer-generate');
const CompareNumber = require('../src/compare-number');

class Game {
  constructor() {
    this.answer = AnswerGenerate.getRandom();
    this.times = 6;
    
    process.stdin.setEncoding('utf-8');
    process.stdin.on('data',(input) => {
      if(!this.isReapet(input)) {
        console.log('Cannot input duplicate numbers!');
        this.ask();
      }else{
        const result = CompareNumber.compare(this.answer,input);
        this.times --;

        if(result === '4A0B'){
          console.log('Congratulations!');
          process.exit();
        }else {
          console.log(result);
          if(this.times === 0) {
            console.log('Game Over');
            console.log(this.answer);
            process.exit();
          }

          this.ask();
        }
      }
    });
  }

  isReapet(input){
    return input.split('').every((item,index,array) =>
    array.lastIndexOf(item) === index);
  }

  start(){
    console.log('Welcome!\n');
    this.ask();
  }

  ask(){
    console.log(`Please input your number(${this.times}):`)
  }
}

new Game().start();

module.exports = Game;