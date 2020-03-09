// 1
// class Car {
//   constructor() {
//     this.cost = function() {
//       return 20000;
//     };

//     this.desc = "basic";
//   }
// }

// function carWithAC(car) {
//   car.hasAC = true;
//   const prevCost = car.cost();
//   car.cost = function() {
//     return prevCost + 500;
//   };

//   car.desc += " AC";
// }

// function carWithAutoTransmission(car) {
//   car.hasAutoTransmission = true;
//   const prevCost = car.cost();
//   car.cost = function() {
//     return prevCost + 2000;
//   };

//   car.desc += " AutoT";
// }

// const car = new Car();
// console.log(car.cost());
// carWithAC(car);
// carWithAutoTransmission(car);

// console.log(car.cost());
// console.log(car.desc);
// console.log(car);

//2

// class Car {
//   constructor() {
//     this.cost = function() {
//       return 20000;
//     };

//     this.desc = "basic";
//   }
// }

// const car = new Car();
// car.autoPark = () => console.log("Auto parking...");

// console.log(car);
// car.autoPark();

// 3

// class Car {
//   constructor() {
//     this.cost = function() {
//       return 20000;
//     };

//     this.desc = "basic";
//   }
// }
// function addParking(car) {
//   car.autoPark = () => console.log("Auto parking...");
// }

// const car = new Car();

// addParking(car);
// console.log(car);
// car.autoPark();

// 4
// class Car {
//   constructor() {
//     this.cost = function() {
//       return 20000;
//     };

//     this.desc = "basic";
//   }
// }
// function addParking() {
//   Car.prototype.autoPark = () => console.log("Auto parking...");
// }

// const car = new Car();
// addParking();

// console.log(car);
// car.autoPark();
