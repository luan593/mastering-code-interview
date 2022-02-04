const { calculate } = require('./../question-03/trapping-rainwater');

describe('', () => {

  it('calculate([]) ➞ ', () => {
    expect(calculate([])).toBe(0);
  });

  it('calculate([1]) ➞ 0', () => {
    expect(calculate([])).toBe(0);
  });

  it('calculate([10, 6]) ➞ 0', () => {
    expect(calculate([10, 6])).toBe(0);
  });

  it('calculate([2, 0, 1]) ➞ 1', () => {
    expect(calculate([2, 0, 1])).toBe(1);
  });

  it('calculate([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]) ➞ 8', () => {
    expect(calculate([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2])).toBe(8);
  });

});