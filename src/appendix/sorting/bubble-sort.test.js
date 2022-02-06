const { bubbleSort } = require('./bubble-sort');

describe('bubble sort', () => {

  it('bubbleSort([5, 1, 4, 2, 8]) ➞ [1, 2, 4, 5, 8]', () => {
    expect(bubbleSort([5, 1, 4, 2, 8])).toEqual([1, 2, 4, 5, 8]);
  });

  it('bubbleSort([1, 2, 3]) ➞ [1, 2, 3]', () => {
    expect(bubbleSort([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('bubbleSort([]) ➞ []', () => {
    expect(bubbleSort([])).toEqual([]);
  });

  it('bubbleSort([64, 34, 25, 12, 22, 11, 90]) ➞ [11, 12, 22, 25, 34, 64, 90]', () => {
    expect(bubbleSort([64, 34, 25, 12, 22, 11, 90])).toEqual([11, 12, 22, 25, 34, 64, 90]);
  });

});