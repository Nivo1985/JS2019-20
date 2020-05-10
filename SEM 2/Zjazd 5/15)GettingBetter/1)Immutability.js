//1
// let x = 1;
// x++;
// console.log(x);

// const y = 1;
// y++;
// console.log(y);

// const z = [1, 2];
// // z = 10;
// // z = [3, 4];
// z[0] = 3;
// z.length = 0;
// console.log(z);

// const z = Object.freeze([1, 2]);
// // z = 10;
// // z = [3, 4];
// z[0] = 3;
// z.length = 0;
// console.log(z);

//2

// const z = [1, 2];
// const w = Object.freeze(z);
// z[0] = 3;
// w[0] = 3;
// console.log(z);
// console.log(w);

// const z = [1, 2];
// z[0] = 3;
// const w = Object.freeze(z);
// z[0] = 6;
// w[0] = 6;
// console.log(z);
// console.log(w);

// const z = [1, 2];
// let temp = z;
// const w = Object.freeze(temp);
// z[0] = 3;
// temp[0] = 3;
// w[0] = 3;
// console.log(z);
// console.log(w);

// const z = [1, 2];
// z = z;
// z = Object.freeze(z);
