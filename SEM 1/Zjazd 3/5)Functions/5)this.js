//1

// (function() {
//   console.log(this);
// })();

//2
// let id = 3;
// let obj = {
//   id: 1,
//   getThisId: function() {
//     let id = 2;
//     return this.id;
//   },
//   getId: function() {
//     let id = 2;
//     return id;
//   },
//   getOuterId: function() {
//     return id;
//   }
// };

//console.log(obj.getThisId());
//console.log(obj.getId());
//console.log(obj.getOuterId());

//3
// let id = 2;

// let obj = {
//   id: 1,
//   getId: function() {
//     console.log(id);
//   }
// };

// for (let i = 0; i < 1; i++) {
//   let id = 3;
//   obj.getId();
// }

// 4
// let id = 2;

// for (let i = 0; i < 1; i++) {
//   let id = 3;

//   let obj = {
//     id: 1,
//     getId: function() {
//       console.log(id);
//     }
//   };
//   obj.getId();
// }
