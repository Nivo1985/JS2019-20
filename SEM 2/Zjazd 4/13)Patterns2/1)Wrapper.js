function Add(x, y) {
  for (let i = 0; i <= 100000; i++) {
    for (let j = 0; j <= 100000; j++) {}
  }
  return x + y;
}

function ShowAggumentsWrapper(func) {
  return function(x, y) {
    console.log("Args: " + x + ", " + y);
    return func(x, y);
  };
}

function ShowExecutionTimeWrapper(func) {
  return function(x, y) {
    let timeStaptStart = Date.now();
    let result = func(x, y);
    console.log("Execution time: " + (Date.now() - timeStaptStart));
    return result;
  };
}

let addWrapperInShowArguments = ShowAggumentsWrapper(Add);
console.log(addWrapperInShowArguments(3, 7));

let addWrapperInShowExecutionTime = ShowExecutionTimeWrapper(Add);
console.log(addWrapperInShowExecutionTime(5, 7));

let addWrappedInAll = ShowExecutionTimeWrapper(ShowAggumentsWrapper(Add));
console.log(addWrappedInAll(3, 5));

Add = ShowExecutionTimeWrapper(ShowAggumentsWrapper(Add));
console.log(Add(1, 2));
