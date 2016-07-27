const stdin = require('mock-stdin').stdin();
const AnswerGenerator = require('../src/models/AnswerGenerator');
const Game = require('../src/models/Game');

describe('play game', () => {
    beforeEach(() => {
        spyOn(AnswerGenerator, 'generator').and.returnValue('1234');
        spyOn(console, 'log');
        spyOn(process, 'exit');

        const game = new Game();
        game.start();
    });

    it('input right answer get Congratulations!', () => {
        expect(console.log).toHaveBeenCalledWith('Welcome!\n');
        expect(console.log).toHaveBeenCalledWith('Please input your number(6):');

        stdin.send('1234');
        expect(console.log).toHaveBeenCalledWith('Congratulations!');
        expect(process.exit).toHaveBeenCalled();
    });

    it('get run out of chance', () => {
        expect(console.log).toHaveBeenCalledWith('Welcome!\n');
        for (let i = 6; i > 0; i--) {
            expect(console.log).toHaveBeenCalledWith(`Please input your number(${i}):`);
            stdin.send('1235');
            expect(console.log).toHaveBeenCalledWith('3A0B');
        }

        expect(console.log).toHaveBeenCalledWith('Game Over\n');
        expect(console.log).toHaveBeenCalledWith('Answer:1234');
        expect(process.exit).toHaveBeenCalled();
    });

    it('should prompt invalid input', () => {
        expect(console.log).toHaveBeenCalledWith('Welcome!\n');
        expect(console.log).toHaveBeenCalledWith('Please input your number(6):');

        stdin.send('1123');
        expect(console.log).toHaveBeenCalledWith('Cannot input duplicate numbers!');
    });
});
