const { longest } = require('./../question-05/longest-substr');

describe('Longest substring without repeating characters', () => {

  it('longest("abccabb") ➞ 3', () => {
    expect(longest("abccabb")).toBe(3);
  });

  it('longest("ccccccc") ➞ 1', () => {
    expect(longest("ccccccc")).toBe(1);
  });

  it('longest("abcbdac") ➞ 4', () => {
    expect(longest("abcbdac")).toBe(4);
  });

});