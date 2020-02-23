// var myObject = {};
// Object.defineProperty(myObject, "a", {
//   value: 4,
//   writable: true,
//   configurable: false,
//   enumerable: true
// });
// console.log(myObject.a); // 4
// myObject.a = 5;
// console.log(myObject.a); // 5
// Object.defineProperty(myObject, "a", {
//   value: 6,
//   writable: true,
//   configurable: true,
//   enumerable: true
// }); // TypeError - one way

// "use strict";
// var myObject = {
//   a: 2
// };
// console.log(myObject.a); // 2
// delete myObject.a;
// console.log(myObject.a); // undefined
// Object.defineProperty(myObject, "b", {
//   value: 3,
//   writable: true,
//   configurable: false,
//   enumerable: true
// });
// console.log(myObject.b); // 3
// delete myObject.b;
// console.log(myObject.b); // 3

//constant
// var myObject = {};
// Object.defineProperty(myObject, "FAVORITE_NUMBER", {
//   value: 42,
//   writable: false,
//   configurable: false
// });

// var myObject = {
//   a: 2
// };
// Object.preventExtensions(myObject);
// myObject.b = 3;
// console.log(myObject.b); // undefined

// "use strict";
// var myObject = {
//   a: 2
// };
// Object.preventExtensions(myObject);
// console.log("Order test");
// myObject.b = 3;
// console.log(myObject.b); // Error

// //all configurable false + preventExtensions
// var myObject = {
//   a: 2
// };
// Object.seal(myObject);
// delete myObject.a;
// myObject.b = 3;
// console.log(myObject);

// var o, d;
// o = { foo: 1 };
// d = Object.getOwnPropertyDescriptor(o, "foo");
// console.log(d);
