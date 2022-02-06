'use strict';

function clean(str) {
  return str.replace(/[^A-Za-z0-9]/g, '');
}

function validPalindrome(str, low, high) {
  str = clean(str);
  while (low < high) {
    if (str[low] !== str[high]) {
      return false;
    }
    else {
      low++;
      high--;
    }
  }
  return true;
}

function almostPalindrome(str) {
  str = clean(str);
  let n = str.length;
  if (n <= 2) return true;
  let left = 0;
  let right = n - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      let firtCase = validPalindrome(str, left, right - 1);
      let secondCase = validPalindrome(str, left + 1, right);
      return firtCase || secondCase;
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