// function getRandomNumber(start = 1, end = 10) {
//   return (parseInt(Math.random() * end) % (end - start + 1)) + start;
// }
// var generatePromise = function(id) {
//   return new Promise(function(resolve, reject) {
//     let randomNumberOfSeconds = getRandomNumber(2, 10);
//     setTimeout(function() {
//       let randomiseResolving = getRandomNumber(1, 10);
//       if (randomiseResolving > 5) {
//         resolve({
//           ordernumber: id,
//           randomNumberOfSeconds: randomNumberOfSeconds,
//           randomiseResolving: randomiseResolving
//         });
//       } else {
//         reject({
//           ordernumber: id,
//           randomNumberOfSeconds: randomNumberOfSeconds,
//           randomiseResolving: randomiseResolving
//         });
//       }
//     }, randomNumberOfSeconds * 1000);
//   });
// };

// for (i = 1; i <= 10; i++) {
//   let promise = generatePromise(i);
//   promise.then(
//     function(value) {
//       console.log("Value when promise is resolved : ", value);
//     },
//     function(reason) {
//       console.log("Reason when promise is rejected : ", reason);
//     }
//   );
// }
