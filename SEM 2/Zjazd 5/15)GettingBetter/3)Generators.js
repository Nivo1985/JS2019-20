// 1
function* generator() {
  console.log(1);
  yield;
  console.log(2);
  yield "two";
  console.log(3);
  return "three";
}

// var state = generator();
// console.log(state);
// console.log(state.next());
// console.log(state.next());
// console.log(state.next());

for (var f of generator()) {
  console.log(f);
}

//2;

// function* generator() {
//   for (var i = 0; i < 5; i++) {
//     yield i;
//   }
// }

// for (var f of generator()) {
//   console.log(f);
// }
