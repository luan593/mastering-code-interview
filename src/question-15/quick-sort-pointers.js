function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function partition(array, low, high) {
  const pivot = array[high];
  let i = low - 1;
  for (let j = low; j <= high; j ++) {
    if (array[j] < pivot) {
      i ++;
      if (i !== j) {
        swap(array, i, j);
      }
    }
  }
  i ++;
  swap(array, i, high);
  return i;
}

function quickSort(array, low, high) {
  if (low < high) {
    let partitionIndex = partition(array, low, high);
    quickSort(array, low, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, high);
  }
}

