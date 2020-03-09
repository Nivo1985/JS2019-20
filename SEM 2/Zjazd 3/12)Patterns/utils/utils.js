const greeting = "Hello World";
let callCounter = 0;
function sayHelloFirstTime() {
  if (callCounter++ === 0) {
    console.log(greeting);
  }
}
function privateLog() {
  console.log("Private Function");
}

function multiply(num1, num2) {
  sayHelloFirstTime();
  console.log("Multiply:", num1, num2);
  return num1 * num2;
}

function divide(num1, num2) {
  sayHelloFirstTime();
  console.log("Divide:", num1, num2);
  return num1 / num2;
}

function sum(num1, num2) {
  sayHelloFirstTime();
  console.log("Sum:", num1, num2);
  return num1 + num2;
}

function subtract(num1, num2) {
  sayHelloFirstTime();
  console.log("Subtract:", num1, num2);
  return num1 - num2;
}

module.exports = {
  sum: sum,
  subtract: subtract,
  multiply: multiply,
  divide: divide
};
