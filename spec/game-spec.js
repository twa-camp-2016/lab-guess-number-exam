'use strict';

const stdin = require('mock-stdin').stdin();
const Game = require('../src/game');
const AnswerGenerator = require('../src/answer-generator');

describe('Game', ()=> {
  beforeEach(()=> {
    spyOn(AnswerGenerator,'generate').and.returnValue('1234');
    spyOn(console, 'log');
    spyOn(process, 'exit');
    const game = new Game();
    game.start();
  });

  it('Congratulations', ()=> {
    expect(console.log).toHaveBeenCalledWith('Welcome!\n');
    expect(console.log).toHaveBeenCalledWith('Please input your number(6):');

    stdin.send('1234');

    expect(console.log).toHaveBeenCalledWith('Congratulations!');
    expect(process.exit).toHaveBeenCalled();
  });

  it('Over', ()=> {
    expect(console.log).toHaveBeenCalledWith('Welcome!\n');
    for (let i = 6; i > 0; i--) {
      expect(console.log).toHaveBeenCalledWith('Please input your number(6):');
      stdin.send('1534');
      expect(console.log).toHaveBeenCalledWith('3A0B');
    }

    expect(console.log).toHaveBeenCalledWith('Game Over\n');
    expect(console.log).toHaveBeenCalledWith(`Answer:1234`);
    expect(process.exit).toHaveBeenCalled();
  });

  it('error', ()=> {
    expect(console.log).toHaveBeenCalledWith('Welcome!\n');
    expect(console.log).toHaveBeenCalledWith('Please input your number(6):');

    stdin.send('1134');

    expect(console.log).toHaveBeenCalledWith('Cannot input duplicate numbers!');
  });
});