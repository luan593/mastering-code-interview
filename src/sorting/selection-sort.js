function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let posMin = i;
    let min = array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] <= min) {
        pos = j;
        min = array[j];
      }
    }
    if (posMin !== i) {
      array[posMin] = array[i];
      array[i] = min;
    }
  }
  return array;
}

selectionSort([64, 11, 25, 12, 22, 11]);

module.exports = {
  selectionSort,
};
