const stdin = require('mock-stdin').stdin();
const Game = require('../src/game');
const AnswerGenerate = require('../src/answer-generate');

describe('game' , ()=> {
  beforeEach(()=> {
    spyOn(AnswerGenerate,'getRandom').and.returnValue('1234');
    spyOn(console,'log');
    spyOn(process, 'exit');

    const game = new Game();
    game.start();
  });

  it('guess right', ()=> {
    expect(console.log).toHaveBeenCalledWith('Welcome!\n');
    expect(console.log).toHaveBeenCalledWith('Please input your number(6):');

    stdin.send('1234');
    expect(console.log('Congratulations!'));
    expect(process.exit).toHaveBeenCalled();

  });

  it('repeat', ()=> {
    expect(console.log).toHaveBeenCalledWith('Welcome!\n');
    expect(console.log).toHaveBeenCalledWith('Please input your number(6):');

    stdin.send('1233');
    expect(console.log('Cannot input duplicate numbers!'));

  });

  it('no times', ()=> {
    expect(console.log).toHaveBeenCalledWith('Welcome!\n');

    for(let i=6; i>0; i--) {
      expect(console.log).toHaveBeenCalledWith(`Please input your number(${i}):`);

      stdin.send('1237');
      expect(console.log('3A0B'));
    }

    expect(console.log).toHaveBeenCalledWith('Game Over');
    expect(process.exit).toHaveBeenCalled();
  });
})