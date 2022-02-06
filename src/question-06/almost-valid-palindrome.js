'use strict';

/**
 * 
 * @param {string} str 
 * @returns {boolean}
 */

function almostPalindrome(str) {
  str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  if (str.length <= 2) return true;
  let left = 0;
  let right = str.length - 1;
  let flag = true;
  while (left < right) {
    if (str[left] !== str[right]) {
      if (flag) {
        flag = false;
        if (left + 1 >= right) {
          left++;
        }
        else if (str[left+1] == str[right]) {
          left++;
        }
        else if (str[left] == str[right-1]) {
          right--;
        }
      }
      else {
        return false;
      }
    }
    else {
      left++;
      right--;
    }
  }
  return true;
}

module.exports = {
  almostPalindrome
}