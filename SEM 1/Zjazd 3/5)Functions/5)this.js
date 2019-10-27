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
