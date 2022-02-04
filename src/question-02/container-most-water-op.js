'use strict';

/**
 * @param {Array} array
 * @returns {number}
 */

function min(a, b) {
  return a < b ? a : b;
}

function mostWater(array) {
  if (array.length <= 1) return 0;
  let max = min(array[0], array[1]) * 1;
  let i = 0, j = array.length - 1;
  while (i < j) {
    let operation = min(array[i], array[j]) * (j - i);
    if (operation > max) max = operation;
    if (array[i] <= array[j]) i++;
    else { 
      j--; 
    }
  }
  return max;
}

module.exports = {
  mostWater
}

