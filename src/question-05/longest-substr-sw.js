'use strict';

/**
 * @param {string} str
 * @returns {int} 
 */

function longest(str) {
  if (str.length <= 1) return str.length;
  let seen = new Map();
  let left = 0, right = 0;
  let max = 0;
  while (left < str.length && right < str.length) {
    let char = str[right];
    if (seen.has(char) && seen.get(char) >= left) {
      let count = right - left;
      if (count > max) max = count;
      left = seen.get(char) + 1;
    }
    seen.set(char, right);
    right ++;
  }
  let count = right - left;
  if (count > max) max = count;
  return max;
}

module.exports = {
  longest
}