'use strict';

/**
 * 
 * @param {string} str 
 * @returns {boolean}
 */

function isValidPalindrome(str) {
  str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  let n = str.length;
  let left, right;
  if (n % 2 === 0) {
    right = n / 2;
    left = right - 1;
  }
  else {
    left = Math.floor(n / 2);
    right = left
  }
  while (left >= 0 && right < n) {
    if (str[left] !== str[right]) return false;
    left--;
    right++;
  }
  return true;
}

module.exports = {
  isValidPalindrome
}