const AnswerGenerator = require('../main/answer-generator');
const CompareNumber = require('../main/compare-number');
const stdin = require('mock-stdin').stdin();
const Game = require('../main/app');

describe('Game',()=> {
    beforeEach(() => {
        spyOn(AnswerGenerator, 'generator').and.returnValue('1234');
        spyOn(console, 'log');
        spyOn(process, 'exit');

        const game = new Game();
        game.start();
    });

    it('should print the win information', ()=> {
        expect(console.log).toHaveBeenCalledWith('Welcome!\n');
        expect(console.log).toHaveBeenCalledWith('Please input your number(6):');

        stdin.send('1234');

        expect(console.log).toHaveBeenCalledWith('Congratulations!');
        expect(process.exit).toHaveBeenCalled();
    });

    it('should print the game over',()=>{
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

    it('should print the error information',()=>{
        expect(console.log).toHaveBeenCalledWith('Welcome!\n');
        expect(console.log).toHaveBeenCalledWith(`Please input your number(6):`);
        
        stdin.send('5521');

        expect(console.log).toHaveBeenCalledWith('Cannot input duplicate numbers!');
    });

});






