// //1

// let sum = (x, y) => x + y;
// let mul = (x, y) => x * y;

// let x = sum(mul(2, 3), 5);

// console.log(x);

// //2

// let sum = (x, y) => x + y;
// let mul = (x, y) => x * y;
// let mulAndSum = (x, y, z) => sum(mul(x, y), z);
// let x = mulAndSum(2, 3, 5);

// console.log(x);

//3
// function sum(x, y) {
//   return x + y;
// }
// function mul(x, y) {
//   return x * y;
// }

// function compose(f1, f2) {
//   return function fc() {
//     var args = [].slice.call(arguments);
//     return f2(f1(args.shift(), args.shift()), args.shift());
//   };
// }

// let mulAndSum = compose(
//   mul,
//   sum
// );

// let x = mulAndSum(2, 3, 5);
// console.log(x);

//4
// let sum = (x, y) => x + y;
// let mul = (x, y) => x * y;

// function compose(f1, f2) {
//   return function fc() {
//     var args = [].slice.call(arguments);
//     return f2(f1(args.shift(), args.shift()), args.shift());
//   };
// }

// let x = compose(
//   mul,
//   sum
// )(2, 3, 5);

// console.log(x);

// 5
// function Mul1(x) {
//   return x * 1;
// }

// function Mul2(x) {
//   return x * 2;
// }
// function Mul3(x) {
//   return x * 3;
// }

// function composeRecurent(...funcs) {
//   return function(x) {
//     if (funcs.length) {
//       return funcs.pop()(composeRecurent(...funcs)(x));
//     }
//     return x;
//   };
// }

// let compFunc = composeRecurent(Mul1, Mul2, Mul3);
// console.log(compFunc(2));
