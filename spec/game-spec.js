
const Game=require('../src/game.js');
const AnswerGenerator=require('../src/answer-generator');

describe('Game',()=>{
    beforeEach(()=>{
        spyOn(AnswerGenerator,'generate').and.returnValue('1234');
        spyOn(console,'log');
    });

    it('should success',()=>{
        spyOn(Game,'inputNumber').and.returnValue('1234');
        Game.play();
        expect(console.log).toHaveBeenCalledWith('Welcome!\n');
        expect(console.log).toHaveBeenCalledWith('Congratulations!\n');

    });

    it('run out of chance',()=>{

        spyOn(Game,'inputNumber').and.returnValue('2143');
        Game.play();
        expect(console.log).toHaveBeenCalledWith('Welcome!\n');
        for(let i=6;i>0;i--){
            expect(console.log).toHaveBeenCalledWith(`Please input your number(${i}):`);
            expect(console.log).toHaveBeenCalledWith('0A4B');
        }
        expect(console.log).toHaveBeenCalledWith('Game Over!');
    });


    it('should repeat',()=>{
        spyOn(Game,'inputNumber').and.returnValue('1134');
        Game.play();
        expect(console.log).toHaveBeenCalledWith('Welcome!\n');
        expect(console.log).toHaveBeenCalledWith('Cannot input duplicate numbers!\n');
    });

});