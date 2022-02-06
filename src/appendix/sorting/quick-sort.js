function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const left  = [];
  const rigth = [];
  for (let i = 0; i < array.length - 1; i ++) {
    if (array[i] < array[array.length - 1]) {
      left.push(array[i]);
    }
    else {
      rigth.push(array[i]);
    }
  }
  if (left.length > 0 && rigth.length > 0) {
    return [...quickSort(left), array[array.length - 1], ...quickSort(rigth)];
  }
  if (left.length > 0) {
    return [...quickSort(left), array[array.length - 1]];
  }
  if (rigth.length > 0) {
    return [array[array.length - 1], ...quickSort(rigth)];
  }
}

module.exports = {
  quickSort
}