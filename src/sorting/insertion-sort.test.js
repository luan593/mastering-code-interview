const { insertionSort } = require('./insertion-sort');

describe('insertion sort', () => {

  it('insertionSort([]) ➞ []', () => {
    expect(insertionSort([])).toEqual([])
  });

  it('insertionSort([11]) ➞ [11]', () => {
    expect(insertionSort([11])).toEqual([11]);
  });

  it('insertionSort([0, 1]) ➞ [0, 1]', () => {
    expect(insertionSort([0, 1])).toEqual([0, 1]);
  });

  it('insertionSort([20, 1]) ➞ [1, 20]', () => {
    expect(insertionSort([20, 1])).toEqual([1, 20]);
  });

  it('insertionSort([7, 8, 5, 2, 4, 6, 3]) ➞ [2, 3, 4, 5, 6, 7, 8]', () => {
    expect(insertionSort([7, 8, 5, 2, 4, 6, 3])).toEqual([2, 3, 4, 5, 6, 7, 8]);
  });

  it('insertionSort([6, 5, 3, 1, 8, 7, 2, 4]) ➞ [1, 2, 3, 4, 5, 6, 7, 8]', () => {
    expect(insertionSort([6, 5, 3, 1, 8, 7, 2, 4])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it('insertionSort([64, 11, 25, 12, 22, 11]) ➞ [11, 11, 12, 22, 25, 64]', () => {
    expect(insertionSort([64, 11, 25, 12, 22, 11])).toEqual([11, 11, 12, 22, 25, 64]);
  });

});