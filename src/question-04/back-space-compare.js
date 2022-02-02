'use strict';

function buildString(string) {
  const array = [];
  for (let pos = 0; pos < string.length; pos++) {
    let char = string[pos];
    if (char === "#") array.pop();
    else array.push(char);
  }
  return array;
}

function backSpaceCompare(string1, string2) {
  let array1 = buildString(string1);
  let array2 = buildString(string2);
  if (array1.length != array2.length) {
    return false;
  }
  for (let pos = 0; pos < string1.length; pos++) {
    if (array1[pos] != array2[pos]) {
      return false;
    }
  }
  return true;
}
