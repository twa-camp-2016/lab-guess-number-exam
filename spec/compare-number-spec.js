const CompareNumber = require('../models/compare-number');

describe('compare', ()=> {
  it('should get 4A0B', ()=> {
    const expected = CompareNumber.compare(`1234`,`1234`);
    expect(expected).toEqual('4A0B');
  })

  it('should get 0A4B', ()=> {
    const expected = CompareNumber.compare(`4321`,`1234`);
    expect(expected).toEqual('0A4B');
  })

  it('should get 2A1B', ()=> {
    const expected = CompareNumber.compare(`1253`,`1234`);
    expect(expected).toEqual('2A1B');
  })
})