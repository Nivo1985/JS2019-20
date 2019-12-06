//0

// let promise = new Promise(function(resolve, reject) {
//   console.log("promise code executed");
//   setTimeout(resolve, 500, "Karol Rogowski"); // mock API call
// });

// 1
// let promise = new Promise(function(resolve, reject) {
//   console.log("promise code executed");
//   setTimeout(resolve, 4500, "Karol Rogowski");
// });

// promise.then(
//   value => console.log("fullfilled: " + value),
//   error => console.log("rejected: " + error)
// );

//2
// let promise = new Promise(function(resolve, reject) {
//   console.log("promise code executed");
//   setTimeout(reject, 500, "Karol Rogowski");
// });

// promise.then(
//   value => console.log("fullfilled: " + value),
//   error => console.log("rejected: " + error)
// );

//3
// let promise = new Promise(function(resolve, reject) {
//   console.log("promise code executed");
//   setTimeout(reject, 500, "Karol Rogowski");
// });
// promise.catch(error => console.log("rejected: " + error));
// promise.then(value => console.log("fullfilled: " + value));
// promise.catch(error => console.log("rejected2: " + error));

//4
// let promise = new Promise(function(resolve, reject) {
//   console.log("promise code executed");
//   setTimeout(reject, 500, "Karol Rogowski");
// });
// promise.catch(error => console.log("rejected: " + error));
// promise.then(
//   value => console.log("fullfilled: " + value),
//   error => console.log("rejected3: " + error)
// );
// promise.catch(error => console.log("rejected2: " + error));

//5
// let promise = new Promise(function(resolve, reject) {
//   setTimeout(resolve, 1000, "Karol Rogowski");
// });
// console.log("before handle");
// promise.then(
//   value => console.log("fullfilled: " + value),
//   error => console.log("rejected: " + error)
// );
// console.log("after handle");
