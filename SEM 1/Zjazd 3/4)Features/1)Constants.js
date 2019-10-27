//const constVar = 2;
//const constVar2; //??
//constVar = 3;
//console.log(constVar);

// const cArray = [1, 2, 3];
// cArray = [3, 2, 1];

// const cArray = [1, 2, 3];
// cArray.push(4);
// console.log(cArray);

// const objC = { a: 1, b: 2, c: 3 };
// objC = {};

// const objC = { a: 1, b: 2, c: 3 };
// objC.d = 4;
// console.log(objC);

let basicArray = [1, 6, 23, 8, 4, 8, 3, 7];
let advancedArray = [1, 6, 23, 8, 4, 8, 3, 7];
function lotto(sourceArray, attempts) {
  let newArray = [];
  let ite = 0;
  while (ite <= attempts - 1) {
    ite++;
    let rand = sourceArray[Math.floor(Math.random() * sourceArray.length)];
    newArray.push(rand);
  }
  console.log(newArray);
  let min = newArray[0];
  for (let i = 1; i < newArray.length; i++) {
    let howMany = newArray[i];
    if (min > howMany) {
      min = howMany;
    }
  }
  console.log("najniższa wartość, to: ");
  return min;
}
console.log(lotto(advancedArray, 3));
