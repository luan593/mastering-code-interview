function mergeSort(array) {
  if (array.length <= 1) return array;
  const middle = Math.floor(array.length / 2);
  const leftSide = mergeSort(array.slice(0, middle));
  const rightSide = mergeSort(array.slice(middle, array.length));
  const sorted = merge(leftSide, rightSide);
  return sorted; 
}

function merge(left, right) {
  let i = 0;
  let j = 0;
  const array = [];
  while (i <= left.length && j <= right.length) {
    if (left[i] <= right[j]) {
      let num = left.shift();
      array.push(num);
      i += 1;
    }
    else {
      let num = right.shift();
      array.push(num);
      j += 1;
    }
  }

  while (left.length > 0) {
    let num = left.shift();
    array.push(num);
  }

  while (right.length > 0) {
    let num = right.shift();
    array.push(num);
  }
  
  return array;
}

module.exports = {
  mergeSort
}