function mergeSort(array) {
  if (array.length <= 1) return array;
  const middle = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, middle));
  const right = mergeSort(array.slice(middle, array.length));
  const sorted = merge(left, right);
  return sorted; 
}

function merge(left, right) {
  let i = 0;
  let j = 0;
  const array = [];
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      let num = left[i];
      array.push(num);
      i += 1;
    }
    else {
      let num = right[j];
      array.push(num);
      j += 1;
    }
  }

  while (left.length > i) {
    let num = left[i];
    array.push(num);
    i += 1;
  }

  while (right.length > j) {
    let num = right[j];
    array.push(num);
    j += 1;
  }

  return array;
}

module.exports = {
  mergeSort
}