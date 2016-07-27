const stdin = require('mock-stdin').stdin();
const Game = require('../src/game');
const AnswerGenerator = require('../src/answer-generator');

describe('game', ()=> {

    beforeEach(()=> {
        spyOn(AnswerGenerator, 'generate').and.returnValue('1234');
        spyOn(console, 'log');
        spyOn(process, 'exit');

        const game = new Game();
        game.start();
    });
    it('should congratulation user when guess digit', ()=> {
        expect(console.log).toHaveBeenCalledWith('Welcome\n');
        expect(console.log).toHaveBeenCalledWith('please input your number(6)');

        stdin.send('1234');

        expect(console.log).toHaveBeenCalledWith('Congratulation');
        expect(process.exit).toHaveBeenCalled();

    });
    it('should game over when have no chance', ()=> {
        expect(console.log).toHaveBeenCalledWith('Welcome\n');
        for (let i = 6; i > 0; i--) {
            expect(console.log).toHaveBeenCalledWith(`please input your number(${i})`);
            stdin.send('1235');
            expect(console.log).toHaveBeenCalledWith('3A0B');
        }
        expect(console.log).toHaveBeenCalledWith('Game Over\n');
        expect(console.log).toHaveBeenCalledWith('Answer:1234');
        expect(process.exit).toHaveBeenCalled();
    });
    it('should warn when have repeat number', ()=> {

        expect(console.log).toHaveBeenCalledWith('Welcome\n');
        expect(console.log).toHaveBeenCalledWith('please input your number(6)');

        stdin.send('1134');

        expect(console.log).toHaveBeenCalledWith('Cannot input repeat number');

    });
});