const Answer = require('./answer');
const CompareNumber = require('./compare-number');
const scanf = require('scanf');

class Game {
  static start() {
    console.log('Welcome!');
    const answer = Answer.getRandomNumber();
    for (let i = 6; i > 0; i--) {
      console.log(`\nPlease input your number(${i}):`);
      let number = '';
      while(1){
        number = this.input();
        if (number.split('').every(this.isDiff)) {
          break;
        }
        console.log('Cannot input duplicate numbers!');return;
      }
      const compareNumber = CompareNumber.compare(number,answer)
      if (compareNumber === '4A0B') {
        console.log('Congratulations!');return;
      }
      if (i===1) {
        console.log('Game Over');return;
      }
      console.log(compareNumber);

    }
  }
  
  static input(){
    return scanf("%s");
  }
  
  static isDiff(value,index,array){
    return array.indexOf(value) === index;
  }
}

module.exports = Game;