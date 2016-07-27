/**
 * Created by chenying on 16-7-27.
 */
const Play = require('../main/modules/play');
const Input = require('../main/modules/input');

describe('Play', () => {
    it('should console Cannot input duplicate numbers!', () => {

        spyOn(Input, 'getInput')
            .and.returnValue('1109');
        spyOn(console, 'log');
        Play.playGame('1234',1);

        const expectText = 'Cannot input illegal numbers!\n';


        expect(console.log).toHaveBeenCalledWith(expectText);
    });

    it('should console 1A1B', () => {
        spyOn(Input, 'getInput')
            .and.returnValue('1367');
        spyOn(console, 'log');
        Play.playGame('1234',1);

        const expectText = '1A1B\n';


        expect(console.log).toHaveBeenCalledWith(expectText);
    });

    it('should console Congratulations!', () => {
        spyOn(Input, 'getInput')
            .and.returnValue('1234');
        spyOn(console, 'log');
        Play.playGame('1234',1);

        const expectText = 'congratulations!';


        expect(console.log).toHaveBeenCalledWith(expectText);
    });
});
