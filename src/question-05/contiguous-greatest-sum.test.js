const { greatestSum } = require('./contiguous-greatest-sum');

describe('greatestSum() ➞ ', () => {

  it('greatestSum([]) ➞ null', () => {
    expect(greatestSum([])).toBe(null);
  });

  it('greatestSum([1]) ➞ null', () => {
    expect(greatestSum([1])).toBe(null);
  });

  it('greatestSum([10, 8]) ➞ null', () => {
    expect(greatestSum([10, 8])).toBe(18);
  });

  it('greatestSum([10, -1, 22]) ➞ null', () => {
    expect(greatestSum([10, -1, 22])).toBe(21);
  });

  it('greatestSum([1, 3, 7, 9, 2, 4]) ➞ null', () => {
    expect(greatestSum([1, 3, 7, 9, 2, 4])).toBe(16);
  });

});