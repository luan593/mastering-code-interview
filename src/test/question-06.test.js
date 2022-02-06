const { isValidPalindrome } = require('./../question-06/palindrome');
const { almostPalindrome } = require('./../question-06/almost-valid-palindrome-op');

describe('Palindrome', () => {

  describe('Valid palindrome', () => {
    
    it('isValidPalindrome("") ➞ true', () => {
      expect(isValidPalindrome('')).toBe(true)
    });

    it('isValidPalindrome("a") ➞ true', () => {
      expect(isValidPalindrome('a')).toBe(true)
    });

    it('isValidPalindrome("aa") ➞ true', () => {
      expect(isValidPalindrome('aa')).toBe(true)
    });

    it('isValidPalindrome("ab") ➞ false', () => {
      expect(isValidPalindrome('ab')).toBe(false)
    });

    it('isValidPalindrome("aba") ➞ true', () => {
      expect(isValidPalindrome('aba')).toBe(true)
    });

    it('isValidPalindrome("race car") ➞ true', () => {
      expect(isValidPalindrome('race car')).toBe(true)
    });
    
    it('isValidPalindrome("race a car") ➞ false', () => {
      expect(isValidPalindrome('race a car')).toBe(false)
    });
    
    it('isValidPalindrome("A man, a plan, a canal: Panama") ➞ true', () => {
      expect(isValidPalindrome('A man, a plan, a canal: Panama')).toBe(true)
    });

  });

  describe('Almost valid palindrome', () => {
    
    it('almostPalindrome("") ➞ true', () => {
      expect(almostPalindrome('')).toBe(true);
    });

    it('almostPalindrome("a") ➞ true', () => {
      expect(almostPalindrome('a')).toBe(true);
    });

    it('almostPalindrome("ab") ➞ true', () => {
      expect(almostPalindrome('ab')).toBe(true);
    });

    it('almostPalindrome("abca") ➞ true', () => {
      expect(almostPalindrome('abca')).toBe(true);
    });

    it('almostPalindrome("raceacar") ➞ true', () => {
      expect(almostPalindrome('raceacar')).toBe(true);
    });

    it('almostPalindrome("abccdba") ➞ true', () => {
      expect(almostPalindrome('abccdba')).toBe(true);
    });

    it('almostPalindrome("abcdefdba") ➞ false', () => {
      expect(almostPalindrome('abcdefdba')).toBe(false);
    });

    it('almostPalindrome("abcxzzfdba") ➞ false', () => {
      expect(almostPalindrome('abcxzzfdba')).toBe(false);
    });

  });

});