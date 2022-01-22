const { selectionSort } = require('./selection-sort');

describe('selection sort', () => {

  it('selectionSort([]) ➞ []', () => {
    expect(selectionSort([])).toEqual([])
  });

  it('selectionSort([11]) ➞ [11]', () => {
    expect(selectionSort([11])).toEqual([11]);
  });

  it('selectionSort([0, 1]) ➞ [0, 1]', () => {
    expect(selectionSort([0, 1])).toEqual([0, 1]);
  });

  it('selectionSort([20, 1]) ➞ [1, 20]', () => {
    expect(selectionSort([20, 1])).toEqual([1, 20]);
  });

  it('selectionSort([7, 8, 5, 2, 4, 6, 3]) ➞ [2, 3, 4, 5, 6, 7, 8]', () => {
    expect(selectionSort([7, 8, 5, 2, 4, 6, 3])).toEqual([2, 3, 4, 5, 6, 7, 8]);
  });

  it('selectionSort([64, 11, 25, 12, 22, 11]) ➞ [11, 11, 12, 22, 25, 64]', () => {
    expect(selectionSort([64, 11, 25, 12, 22, 11])).toEqual([11, 11, 12, 22, 25, 64]);
  });

});