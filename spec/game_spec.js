const AnswerGenerator = require('../src/answer');
const Game = require('../src/game');

describe('Game', ()=> {

    beforeEach(() => {
        spyOn(AnswerGenerator,'generate').and.returnValue('1234');
        spyOn(console, 'log');

    });
    it('shoud congrats user when guess the right answer', () => {
        spyOn(Game,'getInput').and.returnValue('1234');

        const game = new Game();
        game.start();
        expect(console.log).toHaveBeenCalledWith('Welcome!\n');
        expect(console.log).toHaveBeenCalledWith('Please input your number(6):');
        expect(console.log).toHaveBeenCalledWith('Congratulations!\n');
    })


    it('should game over when run out of chance', () => {
        spyOn(Game,'getInput').and.returnValue('1235');

        new Game();
        expect(console.log).toHaveBeenCalledWith('Welcome!\n');

        for (let i = 6; i > 0; i--) {
            expect(console.log).toHaveBeenCalledWith(`Please input your number(${i}):`);
            expect(console.log).toHaveBeenCalledWith('3A0B\n');
        }

        expect(console.log).toHaveBeenCalledWith('Game Over');
        expect(console.log).toHaveBeenCalledWith('Answer:1234');
    });



    it('should prompt invalid input', () => {
        spyOn(Game,'getInput').and.returnValue('1134');
        new Game();
        expect(console.log).toHaveBeenCalledWith('Welcome!\n');
        expect(console.log).toHaveBeenCalledWith('Please input your number(6):');

        expect(console.log).toHaveBeenCalledWith('Cannot input duplicate numbers!\n');
    });

})