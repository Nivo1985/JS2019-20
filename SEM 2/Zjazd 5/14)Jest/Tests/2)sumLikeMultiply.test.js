const sumLikeMultiply = require("../Utilities/2)sumLikeMultiply");

test("adds 1 + 2 to equal 3", () => {
  expect(sumLikeMultiply(1, 2)).toBe(3);
});

test("adds 2 + 2 to equal 4", () => {
  expect(sumLikeMultiply(2, 2)).toBe(4);
});

test("adds 0 + 2 to equal 0", () => {
  expect(sumLikeMultiply(0, 2)).toBe(0);
});

test("adding positive number to zero is to be zero", () => {
  for (let a = 1; a < 100; a++) {
    expect(sumLikeMultiply(a, 0)).toBe(0);
    expect(sumLikeMultiply(0, a)).toBe(0);
  }
});

test("adding negative number to zero is to be zero", () => {
  for (let a = -1; a < -100; a--) {
    expect(sumLikeMultiply(a, 0)).toBe(0);
    expect(sumLikeMultiply(0, a)).toBe(0);
  }
});
