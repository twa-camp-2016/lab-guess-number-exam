'use strict';
const stdin = require('mock-stdin').stdin();
const AnswerGenerator = require('../src/answer-generator.js');
const Game = require('../src/game.js');

describe('play game', ()=> {
    beforeEach(()=> {
        spyOn(AnswerGenerator, 'generator').and.returnValue('1234');
        spyOn(console, 'log');
        spyOn(process, 'exit');

        const game = new Game();
        game.start();
    });

    it('should congrats user guess the right answer', ()=> {
        expect(console.log).toHaveBeenCalledWith('Welcome!');
        expect(console.log).toHaveBeenCalledWith('please input your number(6)');

        stdin.send('1234');

        expect(console.log).toHaveBeenCalledWith('Congratulations!');
        expect(process.exit).toHaveBeenCalled();
    });

    it('shoule game over when tun of chances', ()=> {
        expect(console.log).toHaveBeenCalledWith('Welcome!');
        for (let i = 6; i > 0; i--) {
            expect(console.log).toHaveBeenCalledWith(`please input your number(${i})`);
            stdin.send('1235');
            expect(console.log).toEqual('3A0B');
        }

        expect(console.log).toHaveBeenCalledWith('Game Over!');
        expect(console.log).toHaveBeenCalledWith(`Answer:1234`);
        expect(process.exit).toHaveBeenCalled();

    });

    it('should prompt invalid input', ()=> {
        expect().toHaveBeenCalledWith('Welcome!');
        expect().toHaveBeenCalledWith('please input your number(6)');

        stdin.send('1134');

        expect().toHaveBeenCalledWith('Cannot input repeat numbers!')
    });
});
