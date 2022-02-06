const { quickSort } = require('./quick-sort');

describe('quick sort', () => {

  it('quickSort([]) ➞ []', () => {
    expect(quickSort([])).toEqual([])
  });

  it('quickSort([11]) ➞ [11]', () => {
    expect(quickSort([11])).toEqual([11]);
  });

  it('quickSort([0, 1]) ➞ [0, 1]', () => {
    expect(quickSort([0, 1])).toEqual([0, 1]);
  });

  it('quickSort([20, 1]) ➞ [1, 20]', () => {
    expect(quickSort([20, 1])).toEqual([1, 20]);
  });

  it('quickSort([7, 8, 5, 2, 4, 6, 3]) ➞ [2, 3, 4, 5, 6, 7, 8]', () => {
    expect(quickSort([7, 8, 5, 2, 4, 6, 3])).toEqual([2, 3, 4, 5, 6, 7, 8]);
  });

  it('quickSort([6, 5, 3, 1, 8, 7, 2, 4]) ➞ [1, 2, 3, 4, 5, 6, 7, 8]', () => {
    expect(quickSort([6, 5, 3, 1, 8, 7, 2, 4])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it('quickSort([64, 11, 25, 12, 22, 11]) ➞ [11, 11, 12, 22, 25, 64]', () => {
    expect(quickSort([64, 11, 25, 12, 22, 11])).toEqual([11, 11, 12, 22, 25, 64]);
  });

});