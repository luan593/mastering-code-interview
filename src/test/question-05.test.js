const { longest } = require('./../question-05/longest-substr-sw');

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

  it('longest("abcdbeace") ➞ 5', () => {
    expect(longest("abcdbeace")).toBe(5);
  });

  it('longest("abcdbeaco") ➞ 6', () => {
    expect(longest("abcdbeaco")).toBe(6);
  });

});