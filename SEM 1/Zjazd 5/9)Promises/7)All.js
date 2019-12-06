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

// 1
// var promises = [];
// promises.push(promiseRes(2, "Promise 1"));
// promises.push(promiseRes(1, "Promise 2"));
// promises.push(promiseRes(3, "Promise 3"));
// promises.push(promiseRes(4, "Promise 4"));

// var handleAllPromises = Promise.all(promises);
// handleAllPromises.then(
//   function(values) {
//     console.log("All the promises are resolved", values);
//   },
//   function(reason) {
//     console.log("One of the promises failed with the following reason", reason);
//   }
// );

// 2
// var promises = [];

// var handleAllPromises = Promise.all(promises);
// handleAllPromises.then(
//   function(values) {
//     console.log("All the promises are resolved", values);
//   },
//   function(reason) {
//     console.log("One of the promises failed with the following reason", reason);
//   }
// );

//3
// var promises = [];
// promises.push(promiseRes(2, "Promise 1"));
// promises.push(promiseRes(1, "Promise 2"));
// promises.push(promiseRej(3, "Promise 3"));
// promises.push(promiseRej(4, "Promise 4"));
// promises.push(promiseRes(2, "Promise 5"));

// var handleAllPromises = Promise.all(promises);
// handleAllPromises.then(
//   function(values) {
//     console.log("All the promises are resolved", values);
//   },
//   function(reason) {
//     console.log("One of the promises failed with the following reason", reason);
//   }
// );
