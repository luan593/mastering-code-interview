'use strict';

/**
 * @param {string} str
 * @returns {number}
 */

function longest(str) {
  let n = str.length;
  if (n <= 1) return n;
  let result = 0;
 
  for (let i = 0; i < n; i ++) {
    let count = 0, seen = [];
    
    for (let j = i; j < n; j ++) {
      let char = str[j];
      if (seen.includes(char)) break;
      count ++;
      seen.push(char);
    }
    
    if (count > result) result = count;  
    if ((n - i) < result) break;
  }

  return result;
}

module.exports = {
  longest
}