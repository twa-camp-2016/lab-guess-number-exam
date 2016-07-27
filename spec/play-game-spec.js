const stdin = require('mock-stdin').stdin;
const GenerateAnswer = require('../src/generator-random');
const Game = require('../src/playgame');


describe("playgame", ()=> {
    beforeEach(()=> {
        spyOn(GenerateAnswer, 'generate').and.returnValue('1234');
        spyOn(console, 'log');
        spyOn(process, 'exit');

        const game = new Game();
        game.start();
    });

    it('should congratulation users when input right', ()=> {
        expect(console.log).toHaveBeenCalledWith('Welcome!\n');
        expect(console.log).toHaveBeenCalledWith('Please input your number(6):');
        stdin.send('1234');

        expect(console.log).toHaveBeenCalledWith("Congratulations!");
        expect(process.exit).toHaveBeenCalled();
    });

    it("should end when chance use up", ()=> {
        expect(console.log).toHaveBeenCalledWith('Welcome!\n');

        for (let i = 6; i > 0; i--) {
            expect(console.log).toHaveBeenCalledWith(`Please input your number(${i}):`);
            stdin.send('1235');
            expect(console.log).toHaveBeenCalledWith('3A0B');
        }

        expect(console.log).toHaveBeenCalledWith('Game over!\n');
        expect(console.log).toHaveBeenCalledWith('Answer:1234');
        expect(process.exit).toHaveBeenCalled();
    });

    it("should prompt  invalided inputs", ()=> {

        expect(console.log).toHaveBeenCalledWith('Welcome!\n');
        expect(console.log).toHaveBeenCalledWith('`Please input your number(6):');
        stdin.send('2234');
        expect(console.log).toHaveBeenCalledWith('Can not input duplicated numbers');
    })

});