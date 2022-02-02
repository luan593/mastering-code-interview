'use strict';

function twoSum(array, target) {
  if (array.length === 0 && array.length === 1) return null;
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (target === array[j] + array[i]) return [i, j];
    }
  }
  return null;
}

module.exports = twoSum;
