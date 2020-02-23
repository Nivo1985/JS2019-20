var myObject = {
  a: 2,
  c: undefined
};

console.log(myObject.a);
console.log(myObject.b);
console.log(myObject.c);
console.log(myObject.constructor);

// Uses prototype
console.log("a" in myObject); // true
console.log("b" in myObject); // false
console.log("c" in myObject); // true
console.log("constructor" in myObject); // true

console.log(myObject.hasOwnProperty("a")); // true
console.log(myObject.hasOwnProperty("b")); // false
console.log(myObject.hasOwnProperty("c")); // true
console.log(myObject.hasOwnProperty("constructor")); // false
