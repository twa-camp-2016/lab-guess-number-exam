'use strict';

const CompareNumber = require('../src/compare-number');

describe('compare number', ()=> {
  it('return XAXB', ()=> {
    const input = '1234';
    const answer = '1234';
    const result = CompareNumber.compare(input,answer);
    expect(result).toEqual('4A0B');
  })

  it('return XAXB', ()=> {
    const input = '1234';
    const answer = '4321';
    const result = CompareNumber.compare(input,answer);
    expect(result).toEqual('0A4B');
  })

  it('return XAXB', ()=> {
    const input = '1234';
    const answer = '5678';
    const result = CompareNumber.compare(input,answer);
    expect(result).toEqual('0A0B');
  })

  it('return XAXB', ()=> {
    const input = '1234';
    const answer = '1235';
    const result = CompareNumber.compare(input,answer);
    expect(result).toEqual('3A0B');
  })
});