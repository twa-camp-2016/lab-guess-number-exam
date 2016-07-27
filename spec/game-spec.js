const AnswerGenerator = require('../src/answer-generator');
const Game = require('../src/game');
const stdin = require('mock-stdin').stdin();

describe('game',() => {
    beforeEach(() => {
        spyOn(AnswerGenerator, 'generate').and.returnValue('1234');
        spyOn(console, 'log');
        spyOn(process, 'exit');

        const game = new Game();
        game.start();
    });

    it('should congrats user when guess the right answer', () => {
        expect(console.log).toHaveBeenCalledWith('Welcome!\n');
        expect(console.log).toHaveBeenCalledWith('Please input your number(6):');

        stdin.send('1234');

        expect(console.log).toHaveBeenCalledWith('Congratulations!');
        expect(process.exit).toHaveBeenCalled();
    });

    it('find same digit', () => {
        expect(console.log).toHaveBeenCalledWith('Welcome!\n');
        expect(console.log).toHaveBeenCalledWith('Please input your number(6):');
 
        stdin.send('1224');

        expect(console.log).toHaveBeenCalledWith('Cannot input duplicate numbers!');
    });
    
    it('should congrats user when guess the right answer', () => {
        expect(console.log).toHaveBeenCalledWith('Welcome!\n');
        
        for(let i = 6; i > 0; i--){
            expect(console.log).toHaveBeenCalledWith(`Please input your number(${i}):`);
            
            stdin.send('5678');
            
            expect(console.log).toHaveBeenCalledWith('0A0B');

        }
        expect(console.log).toHaveBeenCalledWith('Game Over\n');
        expect(console.log).toHaveBeenCalledWith('Answer:1234');
        expect(process.exit).toHaveBeenCalled();
    });
})
