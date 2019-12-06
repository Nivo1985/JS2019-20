// 1
// var promiseRes =  function(n = 0) {
//     return new Promise(function(resolve, reject) {
//       setTimeout(function() {
//         resolve({
//           resolvedAfterNSeconds: n
//         });
//       }, n * 1000);
//     });
//   };

// let promiseResolved = promiseRes(2);
// promiseResolved.then(function(value) {
//     console.log("Value when promise is resolved : ", value);
// },function(reason) {
//   console.log("Reason when promise is rejected : ", reason);
// });

// 2

// var promiseRej = function(n = 0) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       reject({
//         rejectedAfterNSeconds: n
//       });
//     }, n * 1000);
//   });
// };
// let promiseRejected = promiseRej(2);
// promiseRejected.then(
//   function(value) {
//     console.log("Value when promise is resolved : ", value);
//   },
//   function(reason) {
//     console.log("Reason when promise is rejected : ", reason);
//   }
// );
