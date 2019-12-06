var promiseRes = function(n = 0, info) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve({
        resolvedAfterNSeconds: n,
        info: info
      });
    }, n * 1000);
  });
};
var promiseRej = function(n = 0, info) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      reject({
        rejectedAfterNSeconds: n,
        info: info
      });
    }, n * 1000);
  });
};

//1
// var promises = [];
// promises.push(promiseRes(2, "Promise 1"));
// promises.push(promiseRes(6, "Promise 2"));
// promises.push(promiseRej(3, "Promise 3"));
// promises.push(promiseRej(4, "Promise 4"));
// promises.push(promiseRes(2, "Promise 5"));

// var handleRacePromises = Promise.race(promises);
// handleRacePromises.then(
//   function(values) {
//     console.log("First resolve", values);
//   },
//   function(reason) {
//     console.log("First reject", reason);
//   }
// );

//2
var promises = [];
promises.push(promiseRes(2, "Promise 1"));
promises.push(promiseRej(1, "Promise 2"));
promises.push(promiseRes(3, "Promise 3"));
promises.push(promiseRej(4, "Promise 4"));
promises.push(promiseRes(2, "Promise 5"));

var handleRacePromises = Promise.race(promises);
handleRacePromises.then(
  function(values) {
    console.log("First resolve", values);
  },
  function(reason) {
    console.log("First reject", reason);
  }
);
