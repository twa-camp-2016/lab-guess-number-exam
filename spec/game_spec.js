const Answer = require('../src/answer-result');
const Game = require('../src/game');
const stdin = require('mock-stdin').stdin();
describe('game',()=>{
    beforeEach(()=>{
        spyOn(Answer,'putAnswer').and.returnValue('1234');
        spyOn(console,'log');
        spyOn(process,'exit');
        new Game();
    });
    it('should get Congratulations', () => {
        expect(console.log).toHaveBeenCalledWith('Welcome!\n');
        expect(console.log).toHaveBeenCalledWith('Please input your number(6):');
        stdin.send('1234');
        expect(console.log).toHaveBeenCalledWith('Congratulations!');
    });

    it('should get Game Over', () => {
        expect(console.log).toHaveBeenCalledWith('Welcome!\n');
        for (let i = 0; i < 6; i++) {
            expect(console.log).toHaveBeenCalledWith(`Please input your number(${6-i}):`);
            stdin.send('1243');
            expect(console.log).toHaveBeenCalledWith('2A2B');
        }
        expect(console.log).toHaveBeenCalledWith('Game Over\n');
        expect(console.log).toHaveBeenCalledWith('answer:1234');
        expect(process.exit).toHaveBeenCalled();
    });
    it('should get duplicate numbers', () => {
        expect(console.log).toHaveBeenCalledWith('Welcome!\n');
        expect(console.log).toHaveBeenCalledWith('Please input your number(6):');
        stdin.send('1111');
        expect(console.log).toHaveBeenCalledWith('Cannot input duplicate numbers!');
    });
});