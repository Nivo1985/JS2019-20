// 1 BASIC

// function Person() {}

// let karol = new Person();

// console.log(karol);
// console.log(typeof karol);
//1,5 new/this
// function Person() {
//   console.log(this);
//   return 1;
// }

// let karol = new Person();
// let adam = Person();

// let tomek = Person;
// console.log(tomek);

// let pawel = new tomek();
// console.log(pawel);

// 2 FIELDS
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }
// let karol = new Person("Karol", "Rogowski");
// let adam = new Person("Adam", "Goral");
// console.log(karol);

// 3 METHOD
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.sayHello = () =>
//     console.log("Hello from " + this.firstName + " " + this.lastName);
// }

// let karol = new Person("Karol", "Rogowski");
// let adam = new Person("Adam", "Goral");
// console.log(karol);
// karol.sayHello();
