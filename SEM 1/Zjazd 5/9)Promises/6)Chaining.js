// var promiseRes = function(n = 0, info) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve({
//         resolvedAfterNSeconds: n,
//         info: info
//       });
//     }, n * 1000);
//   });
// };

// let promise1 = promiseRes(2, "Main level");
// promise1
//   .then(function(value) {
//     console.log(value);
//     return promiseRes(1, "FirstLevel " + value.info);
//   })
//   .then(function(value) {
//     console.log(value);
//     return promiseRes(3, "Second Level " + value.info);
//   })
//   .then(function(value) {
//     console.log(value);
//     return promiseRes(1, "Final Level " + value.info);
//   })
//   .then(function(value) {
//     console.log(value.info);
//   });
