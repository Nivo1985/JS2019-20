//1

// var obj = {
//   c: "C Value"
// };
// obj.a = "A Value";
// Object.defineProperty(obj, "b", {
//   enumerable: true,
//   configurable: true,
//   writable: true,
//   value: "B Value"
// });
// console.log(obj);
// for (var key in obj) {
//   console.log(key);
// }

// var obj = {
//   c: "C Value"
// };
// obj.a = "A Value";
// Object.defineProperty(obj, "b", {
//   enumerable: false,
//   configurable: true,
//   writable: true,
//   value: "B Value"
// });
// console.log(obj);
// for (var key in obj) {
//   console.log(key);
// }
// console.log(obj.b);
// console.log(obj["b"]);

// var obj = {
//   c: "C Value"
// };
// obj.a = "A Value";
// Object.defineProperty(obj, "a", {
//   enumerable: false
// });
// Object.defineProperty(obj, "b", {
//   enumerable: false,
//   configurable: true,
//   writable: true,
//   value: "B Value"
// });
// console.log(obj);
// for (var key in obj) {
//   console.log(key);
// }
// console.log(obj.a);
// console.log(obj.b);
