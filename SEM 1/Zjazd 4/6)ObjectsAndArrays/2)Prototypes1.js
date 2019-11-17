// 1 basic prototype
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// Person.prototype.sayHello = function() {
//   console.log("Hello from " + this.firstName + " " + this.lastName);
// };

// let karol = new Person("Karol", "Rogowski");
// let adam = new Person("Adam", "Tur");

// console.log(karol, adam);

// karol.sayHello();

// 2 after object is created
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// let karol = new Person("Karol", "Rogowski");

// Person.prototype.sayHello = function() {
//   console.log("Hello from " + this.firstName + " " + this.lastName);
//   console.log(this);
// };

// console.log(karol);
// karol.sayHello();

//3 after call

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// let karol = new Person("Karol", "Rogowski");

// console.log(karol);
// karol.sayHello();

// Person.prototype.sayHello = function() {
//   console.log("Hello from " + this.firstName + " " + this.lastName);
// };

// 4 arrow

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// let karol = new Person("Karol", "Rogowski");
// Person.prototype.sayHello = () => {
//   console.log("Hello from " + this.firstName + " " + this.lastName);
//   console.log(this);
// };
// console.log(karol);
// karol.sayHello();
