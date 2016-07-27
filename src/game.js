const AnswerGenerator = require('../src/answer-generator');
const CompareNumber = require('../src/compare-number');
const scanf = require('scanf');

class Game {
    static play() {

        console.log('Welcome!\n');
        for (let i = 6; i > 0; i--) {
            console.log(`Please input your number(${i}):`);
            const input = this.inputNumber();
            if(!input.split('').every(this.isunit)){
                console.log('Cannot input duplicate numbers!\n');
                return;
            }
            const  result=CompareNumber.compareNumber(input,AnswerGenerator.generate());
            if(result==='4A0B'){
                console.log('Congratulations!\n');
                return;
            }
            
            else {
                console.log(result)
            }

        }
        console.log('Game Over!');
    }

    static inputNumber() {
        return scanf('%s');
    }

    static isunit(item, index, array) {
        return array.lastIndexOf(item) === index;

    }
}

module.exports=Game;