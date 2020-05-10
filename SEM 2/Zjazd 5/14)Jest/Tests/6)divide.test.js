const divide = require("../Utilities/6)divide");

test("To throw error when zero division", () => {
  expect(divide.bind(null, 2, 0)).toThrow();
  expect(divide.bind(null, 2, 0)).toThrow(Error);
  expect(divide.bind(null, 2, 0)).toThrow("divide by 0 error");
});

test("Not To throw error when not zero division", () => {
  expect(function() {
    divide(2 / 1);
  }).not.toThrow();
});
