const AnswerGenerator = require('./answer-generator');
const CompareNumber = require('./compare-number');

class Game{

  constructor(){
    this.answer = AnswerGenerator.generateAnswer();
    this.chances = 6;

    process.stdin.setEncoding('utf8');
    process.stdin.on('data',(input) => {
      if (!this.validate(input)){
        console.log('Can not input duplicate number!');
        this.ask();
      }else {
        const result = CompareNumber.compareNumber(this.answer,input);
        if (result === '4A0B'){
          console.log('Congratulations!');
          process.exit();
        }else {
          console.log(result);
          this.chances --;
          if (this.isGameOver()){
            console.log('Game Over!');
            console.log(`Answer:${this.answer}`);
            process.exit();
          }else {
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
    console.log(`Please input your number(${this.chances})!`);
  }

  validate(number){
    return number.split('').every((item,index,array) => array.lastIndexOf(item) === index);
  }

  isGameOver(){
    return this.chances === 0;
  }
}

module.exports = Game;
