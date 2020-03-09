// class Car {
//   constructor(options) {
//     this.doors = options.doors || 4;
//     this.state = options.state || "brand new";
//     this.color = options.color || "white";
//   }
// }
// class Truck {
//   constructor(options) {
//     this.doors = options.doors || 4;
//     this.state = options.state || "used";
//     this.color = options.color || "black";
//   }
// }
// class VehicleFactory {
//   createVehicle(options) {
//     if (options.vehicleType === "car") {
//       // creation conditions
//       return new Car(options);
//     } else if (options.vehicleType === "truck") {
//       return new Truck(options);
//     }
//   }
// }

// const factory = new VehicleFactory();
// const car = factory.createVehicle({
//   vehicleType: "car",
//   doors: 4,
//   color: "silver",
//   state: "Brand New"
// });
// const truck = factory.createVehicle({
//   vehicleType: "truck",
//   doors: 2,
//   color: "white",
//   state: "used"
// });

// console.log(car);

// console.log(truck);

// //2
// class Vehicle {
//   constructor(vehicleType) {
//     this.vehicleType = vehicleType;
//   }
// }
// class Car extends Vehicle {
//   constructor(options) {
//     super(options.vehicleType);
//     this.doors = options.doors || 4;
//     this.state = options.state || "brand new";
//     this.color = options.color || "white";
//   }
// }
// class Truck extends Vehicle {
//   constructor(options) {
//     super(options.vehicleType);
//     this.doors = options.doors || 4;
//     this.state = options.state || "used";
//     this.color = options.color || "black";
//   }
// }
// class VehicleFactory {
//   createVehicle(options) {
//     if (options.vehicleType === "car") {
//       return new Car(options);
//     } else if (options.vehicleType === "truck") {
//       return new Truck(options);
//     }
//   }
// }

// const factory = new VehicleFactory();
// const car = factory.createVehicle({
//   vehicleType: "car",
//   doors: 4,
//   color: "silver",
//   state: "Brand New"
// });
// const truck = factory.createVehicle({
//   vehicleType: "truck",
//   doors: 2,
//   color: "white",
//   state: "used"
// });

// console.log(car);

// console.log(truck);
