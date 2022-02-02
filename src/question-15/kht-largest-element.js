function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function partition(array, low, high) {
  const pivot = array[high];
  let i = low;
  for (let j = low; j < high; j ++) {
    if (array[j] < pivot) {
      if (i !== j) {
        swap(array, i, j);
      }
      i ++;
    }
  }
  swap(array, i, high);
  return i;
}

function quickSort(array, low, high) {
  if (low < high) {
    const partitionIndex = partition(array, low, high);
    quickSort(array, low, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, high);
  }
}

function getKthLargest(array, k) {
  if (k === 0 || array.length < k) { 
    return undefined;
  }
  const indexToFind = array.length - k;
  quickSort(array, 0, array.length - 1);
  return array[indexToFind];
}

module.exports = {
  getKthLargest
}