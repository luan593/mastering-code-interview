const { factorial, tailFactorial } = require("./factorial");

describe("factorial", () => {
  it("factorial(4) ➞ 24", () => {
    expect(factorial(4)).toBe(24);
  });

  it("tailFactorial(5) ➞ 120", () => {
    expect(tailFactorial(5)).toBe(120);
  });

  it("factorial(0) ➞ 0", () => {
    expect(factorial(0)).toBe(1);
  });

  it("tailFactorial(0) ➞ 0", () => {
    expect(tailFactorial(0)).toBe(1);
  });
});
