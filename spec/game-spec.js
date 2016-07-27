const CompareNumber=require('../src/moudles/compareNumber');
const AnswerGenerator=require('../src/moudles/answerGenerator');
const Game=require('../src/game');
const stdin=require('../node_modules/mock-stdin').stdin();

describe('Game', () => {
    beforeEach(() => {
        spyOn(AnswerGenerator, 'generator').and.returnValue('1234');
        spyOn(console, 'log');
        spyOn(process, 'exit');

        const game = new Game();
        game.start();
    });

    it('guess the right answer', () => {
        expect(console.log).toHaveBeenCalledWith('Welcome!\n');
        expect(console.log).toHaveBeenCalledWith(`Please input your number(6):`);

        stdin.send('1234');

        expect(console.log).toHaveBeenCalledWith('Congratulations!');
    });
    it('guess the six times', () => {
        expect(console.log).toHaveBeenCalledWith('Welcome!\n');

        for (let i = 0; i < 6; i++) {
            expect(console.log).toHaveBeenCalledWith(`Please input your number(${6-i}):`);
            stdin.send('1290');
            expect(console.log).toHaveBeenCalledWith('2A0B');
        }

        expect(console.log).toHaveBeenCalledWith('Game Over\n');
        expect(console.log).toHaveBeenCalledWith('Answer:1234');
        expect(process.exit).toHaveBeenCalled();
    });
    it('input repetition number', () => {
        expect(console.log).toHaveBeenCalledWith('Welcome!\n');
        expect(console.log).toHaveBeenCalledWith(`Please input your number(6):`);

        stdin.send('1222');
        expect(console.log).toHaveBeenCalledWith('cannot input repetition number!');
    });

});