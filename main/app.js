/**
 * Created by chenying on 16-7-27.
 */
'use strict'
const AnswerGenerator = require('../main/modules/AnswerGenerator');
const Play = require('../main/modules/play');

console.log('Welcome!\n');

const answer = AnswerGenerator.generate();
for (let i = 6; i > 0; i--) {
    console.log(`Please input your number(${i}):`);
    i = Play.playGame(answer, i);

}

console.log(`Game Over
${answer}`);