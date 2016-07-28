const request = require('request');

const getAnswer = {
  url: 'http://localhost:8000',
  method: 'GET',
  json: true
};

let chance = 6;
request(getAnswer, (err, res, body) => {
  const answer = body;
  start();

  process.stdin.setEncoding('utf8');
  process.stdin.on('data', (input) => {
    if(!(validate(input) || input.length != 4)) {
      console.log('Cannot input duplicate numbers!');
      ask();
    }else {
      const getResult = {
        url: 'http://localhost:8000/compare',
        method: 'POST',
        body: {
          answer: answer.toString(),
          input: input
        },
        json: true
      }

      request(getResult, (err, res, body) => {
        const result = body;
        chance--;
        if(isGameOver(chance)){
          console.log('Game Over!');
          console.log(answer);
        }else {
          if(result === '4A0B') {
            console.log('Congratulations!');
            procecc.exit();
          }else {
            console.log(result);
            ask();
          }
        }
      });
    }
  });
});

function ask() {
  console.log(`Please input your number(${chance})`);
}

function start() {
  console.log('Welcome!');
  ask();
}

function validate(input) {
  return input.split('').every((digit, index, array) => array.lastIndexOf(digit) === index);
}

function isGameOver(chance) {
  return chance === 0;
}