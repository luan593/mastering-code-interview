function factorial(x) {
  if (x <= 1) return 1;
  else {
    return x * factorial(x - 1);
  }
}

function tailFactorial(x, totalSoFar = 1) {
  if (x === 0) return totalSoFar;
  else {
    return tailFactorial(x - 1, totalSoFar * x);
  }
}

module.exports = {
  factorial,
  tailFactorial,
};
