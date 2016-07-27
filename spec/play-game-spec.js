const stdin = require('mock-stdin').stdin();
const AnswerGenerator = require('../src/answer-generator');
const PlayGame = require('../src/play-game');

describe('PlayGame', () => {
    beforeEach(() => {
        spyOn(AnswerGenerator, 'getAnswer')
            .and.returnValues('1234');
        spyOn(console, 'log');
        spyOn(process, 'exit');

        new PlayGame().start();
    });

    it('when input is 1234, should console  Congratulations!', () => {
        expect(console.log).toHaveBeenCalledWith('Welcome!\n');
        expect(console.log).toHaveBeenCalledWith('Please input your number(6): ');
        stdin.send('1234');

        expect(console.log).toHaveBeenCalledWith('Congratulations!');
    })

    it('when input is 5678, should console Game over', () => {
        expect(console.log).toHaveBeenCalledWith('Welcome!\n');

        for(let i = 0 ; i < 6; i++ ){
            expect(console.log).toHaveBeenCalledWith('Please input your number(6): ');

            stdin.send('5678');
            expect(console.log).toHaveBeenCalledWith('0A0B');
        }

        expect(console.log).toHaveBeenCalledWith('Game Over\n');
        expect(console.log).toHaveBeenCalledWith('Answer: 1234');
    });

    it('when input is 1123, should console Cannot input duplicate numbers!', () => {
        expect(console.log).toHaveBeenCalledWith('Welcome!\n');
        expect(console.log).toHaveBeenCalledWith('Please input your number(6): ');

        stdin.send('1123');

        expect(console.log).toHaveBeenCalledWith('Cannot input duplicate numbers!');
    })
});