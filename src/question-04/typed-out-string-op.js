'use strict';

/**
 * 
 * @param {string} x 
 * @param {string} y
 * @returns {boolean} 
 */

function backSpaceCompare(x, y) {
  let px, py;
  px = x.length - 1;
  py = y.length - 1;
  while (px >= 0 && py >= 0) {
    if (x[px] === '#') {
      let backSpace = 2;
      while (backSpace > 0) {
        px--;
        backSpace--;
        if (x[px] === '#') {
          backSpace += 2;
        }
      }
    }
    if (y[py] === '#') {
      let backSpace = 2;
      while (backSpace > 0) {
        py--;
        backSpace--;
        if (x[py] === '#') {
          backSpace += 2;
        }
      }
    }
    if (x[px] !== y[py]) {
      return false;
    }
    px--;
    py--;
  }
  return true;
}

module.exports = {
  backSpaceCompare
}