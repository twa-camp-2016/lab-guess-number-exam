const stdin = require('mock-stdin').stdin();
const Game = require('../src/play-game');
const GenerateAnswer = require('../src/answer-generator');

describe("playgame", ()=> {
    beforeEach(()=> {
        spyOn(GenerateAnswer, 'generateNumbers').and.returnValue('1234');
        spyOn(console,'log');
        spyOn(process,'exit');

        const game = new Game();
        game.start();
    });

    it('should congratulation users when input right',()=>{
        expect(console.log).toHaveBeenCalledWith('Welcome!\n');
        expect(console.log).toHaveBeenCalledWith('Please input your number(6):');
        stdin.send('1234');

        expect(console.log).toHaveBeenCalledWith("Congratulations!");
        expect(process.exit).toHaveBeenCalled();
    });

    it("should game over when run out of the chance",()=>{
        expect(console.log).toHaveBeenCalledWith('Welcome!\n');

        for(let i = 6;i > 0;i--){
            expect(console.log).toHaveBeenCalledWith(`Please input your number(${i}):`);
            stdin.send('1235');
            expect(console.log).toHaveBeenCalledWith('3A0B');
        }

        expect(console.log).toHaveBeenCalledWith('Game over!\n');
        expect(console.log).toHaveBeenCalledWith('Answer:1234');
        expect(process.exit).toHaveBeenCalled();
    });

    it('should prompt invalid inputs',()=>{
        expect(console.log).toHaveBeenCalledWith('Welcome!\n');
        expect(console.log).toHaveBeenCalledWith('Please input your number(6):');
        stdin.send('2234');
        expect(console.log).toHaveBeenCalledWith("Can not input duplicated numbers");

    });
});


