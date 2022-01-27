function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  return array;
}

function quickSort(array) {
  if (array.length <= 1) return array;
  let pivot = array[array.length - 1];
  let i = 0;
  for (let j = 0; j < array.length; j ++) {
    if (array[j] < pivot) {
      array = swap(array, i, j);
      i ++;
    }
  }
  array = swap(array, i, array.length - 1);
  const left = array.slice(0, i);
  const rigth = array.slice(i + 1, array.length);
  return [...quickSort(left), pivot, ...quickSort(rigth)];
}

module.exports = {
  quickSort
}