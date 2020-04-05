const myModule = (function() {
  let privateVariable = "Hello World";

  function privateMethod() {
    console.log(privateVariable);
  }
  return {
    publicMethod: function() {
      console.log("publicMethod start");
      privateMethod();
      console.log("publicMethod end");
    }
  };
})();
console.log(myModule);
console.log(myModule.privateVariable);
myModule.privateVariable = "Super Hacker";
console.log(myModule.privateVariable);
myModule.publicMethod();

// not in iffe
// let createModul = function() {
//   const privateVariable = "Hello World";

//   function privateMethod() {
//     console.log(privateVariable);
//   }
//   return {
//     publicMethod: function() {
//       console.log("publicMethod start");
//       privateMethod();
//       console.log("publicMethod end");
//     }
//   };
// };

// let myModule = createModul();

// console.log(myModule);
// myModule.publicMethod();

// in object
// let modulesObject = {
//   createModul: function() {
//     const privateVariable = "Hello World";

//     function privateMethod() {
//       console.log(privateVariable);
//     }
//     return {
//       publicMethod: function() {
//         console.log("publicMethod start");
//         privateMethod();
//         console.log("publicMethod end");
//       }
//     };
//   }
// };

// let myModule = modulesObject.createModul();

// console.log(myModule);
// myModule.publicMethod();
