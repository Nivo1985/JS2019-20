//1
let fun1 = () => "fun1";
console.log(fun1());

//2
let fun2 = prefix => prefix + "fun1";
console.log(fun2("p"));

//3
let fun3 = (prefix, sufix) => prefix + "fun1" + sufix;
console.log(fun3("p", "s"));

// 4
let funSum = (x, y) => {
  let result = x + y;
  return result;
};
console.log(funSum(4, 7));
