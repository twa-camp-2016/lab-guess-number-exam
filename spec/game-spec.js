const stdin = require('mock-stdin').stdin();
const Game = require('../src/game');
const AnswerGerator = require('../src/answer-generator');

describe('Game', () => {
  beforeEach(() => {
    spyOn(AnswerGerator, 'generateAnswer').and.returnValue('1234');
    spyOn(console, 'log');
    spyOn(process, 'exit');
    new Game().start();
  })

  it('should congrats user when input correct number', () => {
    expect(console.log).toHaveBeenCalledWith('Welcome!\n');
    expect(console.log).toHaveBeenCalledWith('Please input your number(6)!');
    stdin.send('1234');
    expect(console.log).toHaveBeenCalledWith('Congratulations!');
    expect(process.exit).toHaveBeenCalled();
  })

  it('should output game over when out of chances', () => {
    expect(console.log).toHaveBeenCalledWith('Welcome!\n');
    for (let i = 6; i > 0; i--) {
      expect(console.log).toHaveBeenCalledWith(`Please input your number(${i})!`);
      stdin.send('1243');
      expect(console.log).toHaveBeenCalledWith('2A2B');
    }
    expect(console.log).toHaveBeenCalledWith('Game Over!');
    expect(console.log).toHaveBeenCalledWith('Answer:1234');
  })

  it('should prompt invalid input', () => {
    expect(console.log).toHaveBeenCalledWith('Welcome!\n');
    expect(console.log).toHaveBeenCalledWith('Please input your number(6)!');
    stdin.send('1134');
    expect(console.log).toHaveBeenCalledWith('Can not input duplicate number!');
  })
})
