'use strict';

function removeHashtag(str) {
  if (str.includes('#')) {
    let pos = str.indexOf('#');
    str = `${str.substr(0, pos - 1)}${str.substr(pos + 1, str.length)}`;
  }
  return str;
}

function backspaceCompare(str1, str2) {
  while (`${str1}${str2}`.includes("#")) {
    if (str1.includes("#")) {
      str1 = removeHashtag(str1);
    }
    if (str2.includes("#")) {
      str2 = removeHashtag(str2);
    }
  }
  return str1 === str2;
}

module.exports = backspaceCompare;
