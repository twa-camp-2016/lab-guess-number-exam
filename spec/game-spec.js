const stdin = require('mock-stdin').stdin();
const AnswerGenerator = require('../src/answerGenerator');
const Game = require('../src/game');

describe('Game', () => {
    beforeEach  (() => {
        spyOn(AnswerGenerator, 'generate').and.returnValue('1234');
        spyOn(console, 'log');
        spyOn(process, 'exit');

        const game = new Game();
        game.start();
    });

    it('all right', () => {
        expect(console.log).toHaveBeenCalledWith('Welcome!\n');
        expect(console.log).toHaveBeenCalledWith('Please input your number(6):');

        stdin.send('1234');

        expect(console.log).toHaveBeenCalledWith('Congratulations!');
    });

    it('run out of chances', () => {
        expect(console.log).toHaveBeenCalledWith('Welcome!\n');

        for (let i = 0; i < 6; i++) {
            expect(console.log).toHaveBeenCalledWith('Please input your number(6):');
            stdin.send('1238');
            expect(console.log).toHaveBeenCalledWith('3A0B');
        }

        expect(console.log).toHaveBeenCalledWith('Game Over\n');
        expect(console.log).toHaveBeenCalledWith('Answer:1234');
        expect(process.exit).toHaveBeenCalled();
    });

    it('wrong input', () => {
        expect(console.log).toHaveBeenCalledWith('Welcome!\n');
        expect(console.log).toHaveBeenCalledWith('Please input your number(6):');

        stdin.send('1134');

        expect(console.log).toHaveBeenCalledWith('Cannot input duplicate numbers!');
    });
});