function insertionSort(array) {
  for (let i = 0; i < array.length; i ++) {
    let num = array[i];
    let pos = i;
    while (pos > 0 && array[pos - 1] > num) {
      array[pos] = array[pos - 1];
      pos -= 1;
    }
    array[pos] = num;
  }
  return array;
}

module.exports = {
  insertionSort
}