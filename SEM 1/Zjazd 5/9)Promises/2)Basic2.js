// 1
// var trustworthy = false; // true
// let promise = new Promise(function(resolve, reject) {
//   if (trustworthy) {
//     resolve("The person is trustworthy");
//   } else {
//     reject("The person can't be trusted");
//   }
// });

// promise.then(
//   value => console.log("fullfilled: " + value),
//   error => console.log("rejected: " + error)
// );

//2

// var trustworthy = false;
// let promise = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     if (trustworthy) {
//       resolve({
//         value: "The person is trustworthy",
//         code: "CD1_TPIT"
//       });
//     } else {
//       reject({
//         value: "The person can't be trusted",
//         code: "CD2_TPCNBT"
//       });
//     }
//   }, 1000);
// });

// promise.then(
//   value => console.log("fullfilled: " + JSON.stringify(value)),
//   error => console.log("rejected: " + JSON.stringify(error))
// );

//3
// var trustworthy = true;
// let promise = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     if (trustworthy) {
//       resolve({
//         value: "The person is trustworthy",
//         code: "CD1_TPIT"
//       });
//     } else {
//       reject({
//         value: "The person can't be trusted",
//         code: "CD2_TPCNBT"
//       });
//     }
//   }, 1000);
// });

// promise.then(
//   value => console.log("fullfilled1: " + JSON.stringify(value)),
//   error => console.log("rejected1: " + JSON.stringify(error))
// );

// promise.then(
//   value => console.log("fullfilled2: " + JSON.stringify(value)),
//   error => console.log("rejected2: " + JSON.stringify(error))
// );
