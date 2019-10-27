// 0
// function thisExample() {
//   console.log(this);
// }

// let obj1 = { x: 1 };
// let obj2 = {};
// let obj3 = { arr: [1, 2, 3] };

// thisExample();
// thisExample.call(obj1);
// thisExample.call(obj2);
// thisExample.call(obj3);

//1
// let obj = {
//   id: 1,
//   getId: function() {
//     return this.id;
//   }
// };

// let contextObject = { id: 2 };

// console.log(obj.getId());
// console.log(obj.getId.call(contextObject));

//2
// let obj = {
//   id: 1,
//   getId: function(par1, par2) {
//     return par1 + this.id + par2;
//   }
// };

// let contextObject = { id: 2 };

//console.log(obj.getId("p", "s"));
// console.log(obj.getId.apply(contextObject, ["apply prefix ", " apply sufix"]));
// console.log(obj.getId.call(contextObject, "call prefix ", " call sufix"));
