'use strict';

/**
 * @param {Array} array 
 * @returns {int}
 */

function greatestSum(array) {
  if (array.length <= 1) return null;
  let sum = array[0] + array[1];
  let i = 0, j = i + 1;
  while (i < array.length - 1) {
    if ((array[i] + array[j]) > sum) {
      sum = array[i] + array[j];
    }
    i ++;
    j ++;
  }
  return sum;
}

module.exports = {
  greatestSum
}