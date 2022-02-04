'use strict';

/**
 * @param {Array} array
 * @returns {number}
 */

function min(a, b) {
  if (a < b) return a;
  else {
    return b;
  }
}

function mostWater(array) {
  if (array.length <= 1) return 0;
  let most = min(array[0], array[1]) * 1;
  for (let left = 0; left < array.length - 1; left ++) {
    for (let right = left + 1; right < array.length; right ++) {
      let operation = min(array[left], array[right]) * (right - left);
      if (operation > most) most = operation;
    }
  }
  return most;
}

module.exports = {
  mostWater
}