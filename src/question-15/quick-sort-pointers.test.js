const { quickSort } = require('./quick-sort-pointers');

describe('quick sort', () => {

  it('quickSort([]) ➞ []', () => {
    let array = [];
    expect(quickSort(array, 0, array.length - 1)).toEqual([])
  });

  it('quickSort([11]) ➞ [11]', () => {
    let array = [11];
    expect(quickSort(array, 0, array.length - 1)).toEqual([11]);
  });

  it('quickSort([0, 1]) ➞ [0, 1]', () => {
    let array = [0, 1];
    expect(quickSort(array, 0, array.length - 1)).toEqual([0, 1]);
  });

  it('quickSort([20, 1]) ➞ [1, 20]', () => {
    let array = [20, 1];
    expect(quickSort(array, 0, array.length - 1)).toEqual([1, 20]);
  });

  it('quickSort([7, 8, 5, 2, 4, 6, 3]) ➞ [2, 3, 4, 5, 6, 7, 8]', () => {
    let array = [7, 8, 5, 2, 4, 6, 3];
    expect(quickSort(array, 0, array.length - 1)).toEqual([2, 3, 4, 5, 6, 7, 8]);
  });

  it('quickSort([6, 5, 3, 1, 8, 7, 2, 4]) ➞ [1, 2, 3, 4, 5, 6, 7, 8]', () => {
    let array = [6, 5, 3, 1, 8, 7, 2, 4];
    expect(quickSort(array, 0, array.length - 1)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it('quickSort([64, 11, 25, 12, 22, 11]) ➞ [11, 11, 12, 22, 25, 64]', () => {
    let array = [64, 11, 25, 12, 22, 11];
    expect(quickSort(array, 0, array.length - 1)).toEqual([11, 11, 12, 22, 25, 64]);
  });

  it('quickSort([3, 2, 0, 5, 10, 7]) ➞ [0, 2, 3, 5, 7, 10]', () => {
    let array = [3, 2, 0, 5, 10, 7];
    expect(quickSort(array, 0, array.length - 1)).toEqual([0, 2, 3, 5, 7, 10]);
  });

});