//1
// let obj = {
//   id: 1,
//   getId: function() {
//     return this.id;
//   }
// };

// let contextObject = { id: 2 };
// let newGetId = obj.getId.bind(contextObject);
// contextObject.id = 3;
// console.log(obj.getId());
// console.log(newGetId());

// 2
// let obj = {
//   id: 1,
//   getId: function(p, s) {
//     return p + this.id + s;
//   }
// };

// let contextObject = { id: 2 };
// let newGetId = obj.getId.bind(contextObject, "bp", "bs");
// contextObject.id = 3;
// console.log(obj.getId("p", "s"));
// console.log(newGetId());

//3
// let obj = {
//   id: 1,
//   getId: function(p, s) {
//     return p + this.id + s;
//   }
// };

// let contextObject = { id: 2 };
// let newGetId = obj.getId.bind(contextObject, "bp");
// contextObject.id = 3;
// console.log(obj.getId("p", "s"));
// console.log(newGetId("xx"));
