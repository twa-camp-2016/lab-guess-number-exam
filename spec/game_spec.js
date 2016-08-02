const AnswerNumber = require('../src/answer-number');
const Game = require('../src/game');
const stdin = require('mock-stdin').stdin();

describe("Game",()=> {
    beforeEach(()=> {
        spyOn(AnswerNumber, 'generator').and.returnValue('1234');
        spyOn(console, 'log');
        spyOn(process, 'exit');

        const game = new Game();
        game.start();
    })

    it('give right answer', ()=> {
        expect(console.log).toHaveBeenCalledWith('Welcome!\n');
        expect(console.log).toHaveBeenCalledWith('Please input your number(6):');

        stdin.send('1234');
        expect(console.log).toHaveBeenCalledWith('Congratulations!');

    })

    it('run out of chances', ()=> {
        expect(console.log).toHaveBeenCalledWith('Welcome!\n');
        for (let i = 6; i > 0; i--) {
            expect(console.log).toHaveBeenCalledWith(`Please input your number(${i}):`);
            stdin.send('1256');
            expect(console.log).toHaveBeenCalledWith('2A0B');
        }

        expect(console.log).toHaveBeenCalledWith("Game Over");
        expect(console.log).toHaveBeenCalledWith('Answer:1234');

           })
    it('give duplicate answer', ()=> {
        expect(console.log).toHaveBeenCalledWith('Welcome!\n');
        expect(console.log).toHaveBeenCalledWith('Please input your number(6):');
        stdin.send('1123');
        expect(console.log).toHaveBeenCalledWith("Cannot input duplicate numbers!");

    });
})





