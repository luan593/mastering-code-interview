const { getKthLargest } = require('./../question-15/kht-largest-element');

describe('kth largest element', () => {

  it('getKthLargest([], 0) ➞ undefined', () => {
    expect(getKthLargest([], 0)).toBe(undefined);
  });
  
  it('getKthLargest([], 4) ➞ undefined', () => {
    expect(getKthLargest([], 4)).toBe(undefined);
  });
  
  it('getKthLargest([11], 2) ➞ undefined', () => {
    expect(getKthLargest([11], 2)).toBe(undefined);
  });

  it('getKthLargest([99], 1) ➞ undefined', () => {
    expect(getKthLargest([99], 1)).toBe(99);
  });

  it('getKthLargest([3, 2, 0, 5, 10, 7], 6) ➞ 0', () => {
    expect(getKthLargest([3, 2, 0, 5, 10, 7], 6)).toBe(0);
  });

  it('getKthLargest([64, 11, 25, 12, 22, 11], 1) ➞ 64', () => {
    expect(getKthLargest([64, 11, 25, 12, 22, 11], 1)).toBe(64);
  });

});