const { mostWater } = require('./../question-02/container-most-water-op');

describe('Container with the most water', () => {

  it('mostWater([]) ➞ 0', () => {
    expect(mostWater([])).toBe(0);
  });

  it('mostWater([1]) ➞ 0', () => {
    expect(mostWater([1])).toBe(0);
  });

  it('mostWater([10, 6]) ➞ 6', () => {
    expect(mostWater([10, 6])).toBe(6);
  });

  it('mostWater([7, 1, 2, 3, 9]) ➞ 28', () => {
    expect(mostWater([7, 1, 2, 3, 9])).toBe(28);
  });

  it('mostWater([4, 8, 1, 2, 3, 9]) ➞ 32', () => {
    expect(mostWater([4, 8, 1, 2, 3, 9])).toBe(32);
  });

  it('mostWater([6, 9, 3, 4, 5, 8]) ➞ 32', () => {
    expect(mostWater([6, 9, 3, 4, 5, 8])).toBe(32);
  });

});