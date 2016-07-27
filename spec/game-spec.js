const stdin = require('mock-stdin').stdin();

const AnswerGenerator = require('../src/answer-generator');
const Game = require('../src/game');

describe('Game', () => {
    beforeEach(()=> {
        spyOn(AnswerGenerator, 'generate').and.returnValue('1234');
        spyOn(console, 'log');
        spyON(process, 'exit');

        const game = new Game();
        game.start();
    });

    it('should congrats user when guess right answer', ()=> {
        expect(console.log).toHaveBeenCalledWith('Welcome');
        expect(console.log).toHaveBeenCalledWith('Please user your numbers(6)');
        stdin.send('1234');
        expect(console.log).toHaveBeenCalledWith('Congratulation');
        expect(process.exit).toHaveBeenCalled();
    });
});