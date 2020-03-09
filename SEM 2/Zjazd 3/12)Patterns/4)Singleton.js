//1
// function User() {
//   this.name = "Peter"; // long API call
//   this.age = 25;
// }
// const user1 = new User();
// const user2 = new User();
// console.log(user1 === user2);

//2
// let instance = null;
// function User() {
//   if (instance) {
//     return instance;
//   }

//   instance = this; // cool
//   this.name = "Peter"; // long API call
//   this.age = 25;

//   return instance;
// }

// const user1 = new User();
// const user2 = new User();
// console.log(user1 === user2);

//3
// const singleton = (function() {
//   let instance;
//   function init() {
//     return {
//       name: "Peter", // long API call
//       age: 24
//     };
//   }

//   return {
//     getInstance: function() {
//       if (!instance) {
//         instance = init();
//       }

//       return instance;
//     }
//   };
// })();

// const instanceA = singleton.getInstance();
// const instanceB = singleton.getInstance();

// console.log(instanceA === instanceB);
