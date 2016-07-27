const stdin = require('mock-stdin').stdin();
const compare = require('../main/compareNumber');
const answergenerator = require('../main/answergenerator');
const Game = require('../main/game');

describe('compareNumber', () => {
    it('should print correct XAXB', () => {
        expect(compare.compareNumber('1234', '1234')).toBe('4A0B');
    })
    it('should print correct XAXB', () => {
        expect(compare.compareNumber('1234', '4321')).toBe('0A4B');
    })
    it('should print correct XAXB', () => {
        expect(compare.compareNumber('1234', '1256')).toBe('2A0B');
    })
})


describe('answergenerator', () => {
    it('should print correct', () => {

        const isUnique = (item, index, array) => {
            return array.lastIndexOf(item) === index;
        }

        const answer = answergenerator.generator();
        expect(answer.length).toEqual(4);
        expect(answer.split('').every(isUnique)).toBeTruthy();
        expect(answergenerator.generator()).not.toEqual(answergenerator.generator());

    })
})

describe('Game', () => {
    beforeEach(() => {
        spyOn(answergenerator, 'generator').and.returnValue('1234');
        spyOn(console, 'log');
        spyOn(process, 'exit');

        const game = new Game();
        game.start();
    })

    it('should print Congratulation', () => {
        expect(console.log).toHaveBeenCalledWith('Welcome\n');
        expect(console.log).toHaveBeenCalledWith('Please input your number(6):\n');
        stdin.send('1234');
        expect(console.log).toHaveBeenCalledWith('Congratulations\n');
        expect(process.exit).toHaveBeenCalled();
    })

    it('should print Congratulation', () => {
        expect(console.log).toHaveBeenCalledWith('Welcome\n');


        for (let i = 6; i > 0; i--) {
            expect(console.log).toHaveBeenCalledWith(`Please input your number(${i}):\n`);
            stdin.send('4321');
            expect(console.log).toHaveBeenCalledWith('0A4B');
        }

        expect(console.log).toHaveBeenCalledWith('Game Over\n');
        expect(process.exit).toHaveBeenCalled();
    });
});
