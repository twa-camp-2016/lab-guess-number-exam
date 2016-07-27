const stdin = require('mock-stdin').stdin();

const AnswerGenerator = require('../src/answer-generator');
const Game = require('../src/game');

describe('Game', () => {
    beforeEach(()=> {
        spyOn(AnswerGenerator, 'generate').and.returnValue('1234');
        spyOn(console, 'log');
        spyOn(process, 'exit');

        const game = new Game();
        game.start();
    });

    it('should congrats user when guess right answer', ()=> {
        expect(console.log).toHaveBeenCalledWith('Welcome\n');
        expect(console.log).toHaveBeenCalledWith('Please input your numbers(6):');
        stdin.send('1234');
        expect(console.log).toHaveBeenCalledWith('Congratulation');
        expect(process.exit).toHaveBeenCalled();
    });

    it('Cannot input duplicate number', ()=> {
        expect(console.log).toHaveBeenCalledWith('Welcome\n');
        expect(console.log).toHaveBeenCalledWith('Please input your numbers(6):');
        stdin.send('1233');
        expect(console.log).toHaveBeenCalledWith('Cannot input duplicate number');
    });

    it('Game over when run out of chance', ()=> {
        expect(console.log).toHaveBeenCalledWith('Welcome\n');
        for(let i = 0; i < 6; i++){
            expect(console.log).toHaveBeenCalledWith(`Please input your numbers(${6-i}):`);
            stdin.send('1238');
        }
        expect(console.log).toHaveBeenCalledWith('Game Over\n');
        expect(console.log).toHaveBeenCalledWith('Answer:1234');
        expect(process.exit).toHaveBeenCalled();
    });

});