const stdin = require('mock-stdin').stdin();
const AnswerGenerator = require('../src/answer-generator');
const Game = require('../src/game');
describe('game',()=>{
    
    beforeEach(()=>{
        spyOn(console, 'log');
        spyOn(AnswerGenerator, 'generate').and.returnValue('1234');
        spyOn(process, 'exit');
        new Game().start();
    });
    
    it('should be right',()=>{

        expect(console.log).toHaveBeenCalledWith('Welcome!');
        expect(console.log).toHaveBeenCalledWith('Please input your number(6)');

        stdin.send('1234');
        expect(console.log).toHaveBeenCalledWith('Congrational!');
        expect(process.exit).toHaveBeenCalled();
    });
    
    it('should user chances 6',()=>{
        expect(console.log).toHaveBeenCalledWith('Welcome!');
        for (let i = 6;i>0;i--){
            expect(console.log).toHaveBeenCalledWith(`Please input your number(${i})`);
            stdin.send('5678');
            expect(console.log).toHaveBeenCalledWith('0A0B');
        }
        expect(console.log).toHaveBeenCalledWith('Game Over!');
        expect(console.log).toHaveBeenCalledWith('Answer:1234');
        expect(process.exit).toHaveBeenCalled();
        
    });
    
    it('should input wrong',()=>{
        expect(console.log).toHaveBeenCalledWith('Welcome!');
        expect(console.log).toHaveBeenCalledWith('Please input your number(6)');
        stdin.send('1123');
        expect(console.log).toHaveBeenCalledWith('Can not repeat!');
        
    })
});