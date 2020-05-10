const sum = require("../Utilities/1)sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds 2 + 2 to equal 4", () => {
  expect(sum(2, 2)).toBe(4);
});

test("adds 0 + 2 to equal 2", () => {
  expect(sum(0, 2)).toBe(2);
});

test("adds 0 + 0 to equal 0", () => {
  expect(sum(0, 0)).toBe(0);
});

test("adds (-2) + (-2) to equal (-4)", () => {
  expect(sum(-2, -2)).toBe(-4);
});

test("adding positive numbers is not zero", () => {
  for (let a = 1; a < 100; a++) {
    for (let b = 1; b < 100; b++) {
      expect(sum(a, b)).not.toBe(0);
    }
  }
});

test("adding positive numbers is greater than", () => {
  for (let a = 1; a < 100; a++) {
    for (let b = 1; b < 100; b++) {
      expect(sum(a, b)).toBeGreaterThan(0);
    }
  }
});

test("adding negative numbers is less than", () => {
  for (let a = -1; a > -100; a--) {
    for (let b = -1; b > -100; b--) {
      expect(sum(a, b)).toBeLessThan(0);
    }
  }
});

// npm run test
