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

// //3
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

// 4
// class Person {
//   constructor() {
//     this.name = "Peter";
//     this.age = 25;
//   }
// }

// const singleton = (function() {
//   let instance;
//   function init() {
//     return new Person();
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
// const instanceC = new Person();

// console.log(instanceA === instanceB);

// 5
// const singleton = (function() {
//   let instance;
//   function init() {
//     return new Person();
//   }

//   class Person {
//     constructor() {
//       this.name = "Peter";
//       this.age = 25;
//     }
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
// //const instanceC = new Person();

// console.log(instanceA === instanceB);

// 6
// const singleton = (function() {
//   let instance;
//   function init(name, age) {
//     return new Person(name, age);
//   }

//   class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
//   }

//   return {
//     getInstance: function(name, age) {
//       if (!instance) {
//         instance = init(name, age);
//       }

//       return instance;
//     }
//   };
// })();

// const instanceA = singleton.getInstance("Karol", 35);
// const instanceB = singleton.getInstance("Adam", 29);

// console.log(instanceA === instanceB);
