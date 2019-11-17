// 1 string
// String.prototype.showMe = function() {
//   console.log("Hello world from " + this);
// };

// "Karol Rogowski".showMe();

// 2 Number
// Number.prototype.getValueDescription = function() {
//   return "My value is: " + this;
// };

// console.log((4).getValueDescription());

// // 3 function prototype
// function Demo() {
//   console.log("Demo function result");
// }

// Function.prototype.customRun = function() {
//   console.log("Custom run begin");
//   this();
//   console.log("Custom run end");
// };

// Demo.customRun();

// // 4 function prototype
// function Demo() {
//   for (let i = 0; i < 1000; i++) {
//     for (let j = 0; j < 1000; j++) {
//       for (let k = 0; k < 1000; k++) {}
//     }
//   }
// }

// Function.prototype.measureExecTime = function() {
//   let ts = new Date().getTime();
//   this();
//   let te = new Date().getTime();
//   return te - ts;
// };

// console.log("Execution took " + Demo.measureExecTime() + " milisecends");
