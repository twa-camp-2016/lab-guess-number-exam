const Answer = require('../models/answer');

describe('play game', ()=> {
  it('get random numbers', ()=> {
    const isDiff = (value,index,array)=>{
      return array.indexOf(value) === index;
    }
    const randomAnswer = Answer.getRandomNumber();
    expect(randomAnswer.length).toEqual(4)
    expect(randomAnswer.split('').every(isDiff)).toBe(true);
    expect(Answer.getRandomNumber()).not.toEqual(Answer.getRandomNumber())
  })

})