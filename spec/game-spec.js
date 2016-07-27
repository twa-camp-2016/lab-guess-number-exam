'use strict';
const CompareNumber = require('../src/compare-number');
const AnswerGenerator = require('../src/answer-generator');
const stdin = require('mock-stdin').stdin;
const Game = require('../src/game');

describe('game',()=>{
    it('should play game',()=>{
        spyOn(AnswerGenerator,'generate').and.returnValue('1234');
        spyOn(console,'log');
        spyOn(process,'exit');
        
        const game = new Game();
        game.start();
    });
    
    it('should succeed',()=>{
        expect(console.log).toHaveBeenCalledWith('Welcome!\n');
        expect(console.log).toHaveBeenCalledWith('Please input your number(6):');
        stdin.input('1234');
        expect(console.log).toHaveBeenCalledWith('Congratulations!');
        
    });

    it('should ill',()=>{
        expect(console.log).toHaveBeenCalledWith('Welcome!\n');
        expect(console.log).toHaveBeenCalledWith('Please input your number(6):');
        stdin.input('1233');
        expect(console.log).toHaveBeenCalledWith('Cannot input duplicate numbers!');

    });

    it('should ill',()=>{
        expect(console.log).toHaveBeenCalledWith('Welcome!\n');
        for(let i=0 ;i<6;i++){
            expect(console.log).toHaveBeenCalledWith('Please input your number(6):');
            stdin.input('1243');
            expect(console.log).toHaveBeenCalledWith('2A2B');
        }
        expect(console.log).toHaveBeenCalledWith('Game Over\n');
        expect(console.log).toHaveBeenCalledWith('Answer:1234');
        expect(process.exit()).toHaveBeenCalledWith();
    })
    
});