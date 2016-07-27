const Answer = require('../models/answer');
const Game = require('../models/game');

describe('play game', ()=> {
  beforeEach(()=> {
    spyOn(Answer, 'getRandomNumber').and.returnValue('1234');
    spyOn(console, 'log');
  })

  it('input number repeat', ()=> {
    spyOn(Game, 'input').and.returnValue('1123');
    Game.start();
    expect(console.log).toHaveBeenCalledWith('Welcome!')
    expect(console.log).toHaveBeenCalledWith('\nPlease input your number(6):')
    expect(console.log).toHaveBeenCalledWith('Cannot input duplicate numbers!')
  })

  it('input number success', ()=> {
    spyOn(Game, 'input').and.returnValue('1234');
    Game.start();
    expect(console.log).toHaveBeenCalledWith('Welcome!')
    expect(console.log).toHaveBeenCalledWith('\nPlease input your number(6):')
    expect(console.log).toHaveBeenCalledWith('Congratulations!')
  })

  it('input number fail', ()=> {
    spyOn(Game, 'input').and.returnValue('1245');
    Game.start();
    expect(console.log).toHaveBeenCalledWith('Welcome!')
    for (let i = 6; i > 0; i--) {
      expect(console.log).toHaveBeenCalledWith(`\nPlease input your number(${i}):`)
      expect(console.log).toHaveBeenCalledWith('2A1B');
    }
    expect(console.log).toHaveBeenCalledWith('Game Over')

  })

})