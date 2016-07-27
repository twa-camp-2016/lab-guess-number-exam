const AnswerGenerator = require('../src/answer-generator');
const Game = require('../src/game');
const stdin = require('mock-stdin').stdin();

describe('Game',()=>{
    beforeEach(()=>{
        spyOn(AnswerGenerator, 'generator').and.returnValue('1234');
        spyOn(console, 'log');
        spyOn(process, 'exit');

        const game = new Game();
        game.start();
    });

    it('guess right',()=>{
        expect(console.log).toHaveBeenCalledWith('Welcome!\n');
        expect(console.log).toHaveBeenCalledWith('Please input your number:\n');
        stdin.send('1234');
        expect(console.log).toHaveBeenCalledWith('Congratulations!\n');
    });
    it('guess wrong',()=>{
        expect(console.log).toHaveBeenCalledWith('Welcome!\n');
        for (let i=0;i<6;i++) {
            expect(console.log).toHaveBeenCalledWith('Please input your number:\n');
            stdin.send('1235');
            expect(console.log).toHaveBeenCalledWith('3A0B');
        }
        expect(console.log).toHaveBeenCalledWith('Game Over!\n');
    });
    it('double number',()=>{
        expect(console.log).toHaveBeenCalledWith('Welcome!\n');
        expect(console.log).toHaveBeenCalledWith('Please input your number:\n');
        stdin.send('1134');
        expect(console.log).toHaveBeenCalledWith('Cannot input double number:\n');
    });
});