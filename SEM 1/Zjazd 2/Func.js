//1 basic function
// function sayHello() {
//   console.log("Hello there");
// }
// sayHello();

//2 parameters
// function showValue(x) {
//   console.log("Value is: " + x);
// }
// showValue(0);
// showValue(2);
// showValue("Karol");

// function showSum(x, y) {
//   let sum = x + y;
//   console.log("Sum equels :" + sum);
//   console.log("Is of type :" + typeof sum);
// }
// showSum(2);
// showSum(2, 3);
// showSum(2, 3, 4);
// showSum("karol", 2);
// showSum(2, "karol");
// showSum("karol", "rogowski");

//3 What woudl happen?
// let var1 = 2;
// let var2 = 3;
// function showSum2(x, y) {
//   let sum = x + y;
//   console.log("Sum equels :" + sum);
//   console.log("Is of type :" + typeof sum);
//   y = y + x;
//   console.log(y);
// }
// showSum2(var1, var2);
// console.log(var2);

//4 return
// console.log(getSum(2, 3));
// function getSum(x, y) {
//   let result = x + y;
//   return result;
// }
//let var1 = getSum(2, 3);
// console.log("Sum equels :" + var1);
// console.log("Is of type :" + typeof var1);
// let var2 = getSum(2, "Karol");
// console.log("Sum equels :" + var2);
// console.log("Is of type :" + typeof var2);
// let var3 = getSum("Karol", "Rogowski");
// console.log("Sum equels :" + var3);
// console.log("Is of type :" + typeof var3);

//5 scope
// function exampleFunction() {
//   console.log("exampleFunction executed");
//   let x = 10;
// }
// exampleFunction();
// console.log(x);

// let x = 5;
// function exampleFunction() {
//   console.log("exampleFunction executed");
//   console.log(x);
// }
// exampleFunction();
// console.log(x);

// let x = 5;
// function exampleFunction() {
//   console.log("exampleFunction executed");
//   let x = 10;
//   console.log(x);
// }
// exampleFunction();
// console.log(x);

// let x = 5;
// function exampleFunction() {
//   x = 10;
//   console.log("exampleFunction executed");
//   console.log(x);
// }

// exampleFunction();
// console.log(x);
