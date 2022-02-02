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

function quickSelection(array, low, high, index) {
  if (low < high) {
    partitionIndex = partition(array, low, high);
    if (partitionIndex === index) {
      return array[partitionIndex];
    }
    if (index < partitionIndex) {
      return quickSelection(array, low, partitionIndex - 1, index);
    }
    if (index > partitionIndex) {
      return quickSelection(array, partitionIndex + 1, high, index);
    }
  }
}

module.exports = {
  quickSelection
}