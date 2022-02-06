function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i ++) {
    let sorted = false;
    for (let j = 1; j < array.length; j ++) {
      if (array[j - 1] > array[j]) {
        sorted = true;
        let aux = array[j - 1];
        array[j - 1] = array[j];
        array[j] = aux;
      }
    }
    if (!sorted) break;
  }
  return array;
}

module.exports = {
  bubbleSort
}
