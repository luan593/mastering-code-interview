'use strict';

/**
 * @param {Array} array
 * @returns {number}
 */

function calculate(array) {
  if (array.length <= 2) return 0;
  let right, left, rightWall, leftWall, total;
  left = 0;
  right = array.length - 1;
  leftWall = array[left];
  rightWall = array[right];
  total = 0;
  while (left < right) {
    if (array[left] <= array[right]) {
      if (array[left] > leftWall) {
        leftWall = array[left];
      }
      else {
        total += leftWall - array[left];
      }
      left++;
    }
    else {
      if (array[right] > rightWall) {
        rightWall = array[right];
      }
      else {
        total += rightWall - array[right];
      }
      right--;
    }
  }
  return total;
}

module.exports = {
  calculate
}