const { mergeSort } = require('./merge-sort');

describe('merge sort', () => {

  it('mergeSort([]) ➞ []', () => {
    expect(mergeSort([])).toEqual([])
  });

  it('mergeSort([11]) ➞ [11]', () => {
    expect(mergeSort([11])).toEqual([11]);
  });

  it('mergeSort([0, 1]) ➞ [0, 1]', () => {
    expect(mergeSort([0, 1])).toEqual([0, 1]);
  });

  it('mergeSort([20, 1]) ➞ [1, 20]', () => {
    expect(mergeSort([20, 1])).toEqual([1, 20]);
  });

  it('mergeSort([7, 8, 5, 2, 4, 6, 3]) ➞ [2, 3, 4, 5, 6, 7, 8]', () => {
    expect(mergeSort([7, 8, 5, 2, 4, 6, 3])).toEqual([2, 3, 4, 5, 6, 7, 8]);
  });

  it('mergeSort([6, 5, 3, 1, 8, 7, 2, 4]) ➞ [1, 2, 3, 4, 5, 6, 7, 8]', () => {
    expect(mergeSort([6, 5, 3, 1, 8, 7, 2, 4])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it('mergeSort([64, 11, 25, 12, 22, 11]) ➞ [11, 11, 12, 22, 25, 64]', () => {
    expect(mergeSort([64, 11, 25, 12, 22, 11])).toEqual([11, 11, 12, 22, 25, 64]);
  });

});