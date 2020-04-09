//1
// function f() {
//   let count = 0;

//   return function() {
//     return ++count;
//   };
// }

// let x = f();
// let y = f();

// console.log("x_" + x());
// console.log("x_" + x());

// console.log("y_" + y());
// console.log("y_" + y());
// console.log("y_" + y());
//2
// function s(x) {
//   return function(y) {
//     return x + y;
//   };
// }

// let sumWith5 = s(5);
// console.log(sumWith5(1));
// console.log(sumWith5(2));

// let sumWith1 = s(1);
// console.log(sumWith1(1));
// console.log(sumWith1(2));

//3
function s(x, y) {
  return function() {
    return x + y;
  };
}

let sum5and1 = s(5, 1);
console.log(sum5and1());
console.log(sum5and1());
