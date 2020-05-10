const arrayToObjectNullCondition = require("../Utilities/4)arrayToObjectNullCondition");

test("Creating object with one field", () => {
  expect(arrayToObjectNullCondition(["zero", 0])).toEqual({ zero: 0 }); //toEqual recursively checks every field of an object or array.
});

test("Creating object with three fields", () => {
  expect(
    arrayToObjectNullCondition(["zero", 0], ["one", 1], ["two", 2])
  ).toEqual({
    zero: 0,
    one: 1,
    two: 2
  }); //toEqual recursively checks every field of an object or array.
});

test("Duplicates not overwriten", () => {
  expect(
    arrayToObjectNullCondition(["zero", 0], ["one", 1], ["one", 2])
  ).toEqual({
    zero: 0,
    one: 1
  });
});

test("Falsy if empty array", () => {
  expect(arrayToObjectNullCondition()).toBeFalsy();
});

test("Undefined if empty array", () => {
  expect(arrayToObjectNullCondition()).toBeUndefined();
});
