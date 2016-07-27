'use strict';

const AnswerGenerator = require('./answer-generator');
const CompareNumber = require('./compare-number');

class Game {
  constructor() {
    this.answer = AnswerGenerator.generate();
    this.chance = 6;
  }

  run() {
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', (input)=> {
      if (!this.validate(input) || input.length !== 4) {
        console.log('Cannot input duplicate numbers!');
        this.ask();
      }
      else {
        const result = CompareNumber.compare(input, this.answer);
        if (result === '4A0B') {
          console.log('Congratulations!');
          process.exit();
        }
        else {
          console.log(result);
          this.chance--;
          if (this.isOver()) {
            console.log('Game Over\n');
            console.log(`Answer:${this.answer}`);
            process.exit();
          }
          else {
            this.ask();
          }
        }
      }
    });
  }

  start() {
    console.log('Welcome!\n');
    this.ask();
  }

  ask() {
    console.log(`Please input your number(${this.chance}):`);
    this.run();
  }

  validate(input) {
    return input.split('').every((digit, index, array) => {
      return array.lastIndexOf(digit) === index;
    });
  }

  isOver() {
    return this.chance === 0;
  }
}

new Game().start();

module.exports = Game;