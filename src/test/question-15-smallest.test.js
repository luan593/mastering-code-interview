const { quickSelection } = require('./../question-15/kth-smallest-element');

describe('kth smallest element', () => {

  it('quickSelection([], 0) ➞ undefined', () => {
    expect(quickSelection([], 0)).toBe(undefined);
  });
  
  it('quickSelection([], 4) ➞ undefined', () => {
    expect(quickSelection([], 4)).toBe(undefined);
  });
  
  it('quickSelection([11], 2) ➞ undefined', () => {
    expect(quickSelection([11], 2)).toBe(undefined);
  });

  it('quickSelection([99], 1) ➞ undefined', () => {
    expect(quickSelection([99], 1)).toBe(99);
  });

  it('quickSelection([3, 2, 0, 5, 10, 7], 3) ➞ 5', () => {
    expect(quickSelection([3, 2, 0, 5, 10, 7], 3)).toBe(5);
  });

  it('quickSelection([3, 21, 0, 5, 10, 7], 0) ➞ 0', () => {
    expect(quickSelection([3, 21, 0, 5, 10, 7], 0)).toBe(0);
  });

  it('quickSelection([64, 11, 25, 12, 22, 11], 5) ➞ 64', () => {
    expect(quickSelection([64, 11, 25, 12, 22, 11],0,  5)).toBe(64);
  });

});