
const AnswerGenerate = require('../src/answer-generate');
const CompareNumber = require('../src/compare-number');

describe('conpare', ()=> {
  it('return XAXB' ,()=> {
    expect(CompareNumber.compare('1234','1234')).toEqual('4A0B');
    expect(CompareNumber.compare('1234','5678')).toEqual('0A0B');
    expect(CompareNumber.compare('1234','4321')).toEqual('0A4B');
    expect(CompareNumber.compare('1234','1327')).toEqual('1A2B');
  })
})


describe('answer', ()=> {
  it('get random' ,()=> {
    const result = AnswerGenerate.getRandom();

    expect(result.length).toEqual(4);
    result.split('').forEach(c => {
      expect(result.indexOf(c)).toEqual(result.lastIndexOf(c));
    })
  })
})