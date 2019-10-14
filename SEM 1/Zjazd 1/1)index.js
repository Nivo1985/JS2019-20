// 1 Hello
//console.log("Hello world!");

// 2 Variables
// let movieName = "Titanic";
// let movieUniqueName = "Tit2015Mxt5";
// console.log(movieName);
// console.log(movieUniqueName);
// movieName = "Titanic2";
// console.log(movieName);

// //3 basic errors
// let var = 'VALUE';
// console.log(var);

// let example1 = 'I'm karol';
// let example2 = "I'm karol";

//console.log(tt);

// //4 number vs strings
// console.log(4);
// console.log(4.0, 4.01);
// console.log("4.00");
// console.log(3 + 4);
// console.log("3" + 4);
// console.log("3" + "4");
// console.log(3 + "4");
// let i = 3 + "4";
// console.log(typeof i);

//5 types string and number
// let val1 = "Karol";
// console.log(val1, typeof val1);

// let val2 = 4;
// console.log(val2, typeof val2);

// let val3 = "4";
// console.log(val3, typeof val3);

// console.log("4 + 2");
// console.log(4 + 2);

// console.log("4.1 + 1.1");
// console.log(4.1 + 1.1);

// console.log("10 / 0");
// console.log(10 / 0);
// console.log(-10 / 0);
// console.log("typeof(10 / 0)");
// console.log(typeof (10 / 0));

// let i = 10 / 0;
// console.log(!!i);

// console.log("0 / 0");
// console.log(0 / 0);
// console.log("typeof(0 / 0)");
// console.log(typeof (0 / 0));

// let val4 = false;
// console.log(val4, typeof val4);

// let val5;
// console.log(val5, typeof val5);
// val5 = null;
// console.log(val5, typeof val5);

// console.log(typeof {});
// console.log(typeof function() {});

// //6 arrays
// let val1 = [1, 2, 3];
// console.log(val1, typeof val1);
// console.log("val1[0]");
// console.log(val1[0]);
// console.log("val1[1]");
// console.log(val1[1]);
// console.log("val1[-1]");
// console.log(val1[-1]);
// console.log("val1[3]");
// console.log(val1[3]);

// let val1 = [0, 1, 2, 3];
// let l = val1.push(4);
// console.log(val1);
// l = val1.push(5);
// console.log(val1);

// let val1 = [1, 2, 3];
// let tempElement;
// tempElement = val1.pop();
// console.log(tempElement);
// console.log(val1);

// let val1 = [1, 2, 3];
// let tempElement = val1.shift();
// console.log(tempElement);
// console.log(val1);

// let val1 = [1, 2, 3];
// val1.push(33);
// val1.push(44);
// val1.push(55);
//console.log(val1);

// let val1 = [1, 2, 3, 4, 5];
// val1.splice(1);
// console.log(val1);

// let val1 = [1, 2, 3, 4, 5];
// val1.splice(1,2);
// console.log(val1);

// let val1 = [1, 2, 3, 4, 5];
// val1.splice(1, 2, 100, 200, 300, 300);
// console.log("val1.splice(1, 2, 100, 200, 300, 300)");
// console.log(val1);
// console.log("val1.indexOf(200)");
// console.log(val1.indexOf(200));
// console.log("val1.indexOf(400)");
// console.log(val1.indexOf(400));
// console.log("val1.indexOf(300)");
// console.log(val1.indexOf(300));

//7 operators

// console.log(1 == 1);
// console.log(1 == true);
// console.log(1 === true);
// console.log(1 != true);
// console.log(1 !== true);

// let i = 0;
// console.log(i++);
// console.log(++i);
// console.log(i--);
// console.log(--i);
// console.log(i);

// let i = "5";
// console.log(+i);
// console.log(typeof +i);
// console.log(-i);
// console.log(typeof -i);
// console.log(i);
// console.log(typeof i);
// let j = "xyz";
// console.log(+j);

// let v1 = 4;
// let v2 = 10;
// let v3 = 3;
// let v4 = false;
// let v5 = 0;
// console.log(v1 > 5 && v2 < 100);
// console.log(v1 > 5 || v2 < 100);
// console.log(v1 > 5 || (v2 < 100 && v3 === 3)); //??
// console.log((v1 > 5 || v2 < 100) && v3 === 3); //??
// console.log(!v1);
// console.log(!!v1);
// console.log(!v5);
// console.log(!!v5);
// console.log(v1 && v2);
// console.log(v1 || v2);
// console.log(v4 && v5);
// console.log(v4 || v5);
// console.log(0 && "");
// console.log(0 || "");
// console.log(4 && {});
// console.log(4 || {});
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Logical

// let userData = null;
// let defaultData = "data from configuration";
// console.log(userData || defaultData);

// //conditional;
// let i = false ? 4 : 5;
// console.log(i);

// let i = 13;
// i +=1;
// console.log(i);
// i -=1;
// console.log(i);
// i %= 4;
// console.log(i);

// //8 if else
// if (4 === 4) {
//   console.log("if(4 === 4)");
// }

// if (4 > 8) {
//   console.log("if(4 > 8)");
// }

// if (4 <= 4) {
//   console.log("if(4<=4)");
// }

// if (4 == "4") {
//   console.log('if(4=="4")');
// }

// if (4 === "4") {
//   console.log('if(4==="4")');
// }

// let x = 4,
//   y = 4;
// if (x > y) {
//   y = x + y;
// }
// console.log(y);

// if (4 > 8) {
//   console.log("if(4 > 8)");
// } else {
//   console.log("Not true that: 4 > 8");
// }

// let x = 4,
//   y = 4;
// if (x > y) {
//   y = y + x;
//   console.log(y);
// } else if (x === y) {
//   y = 3;
//   x = 2;
//   console.log(x, y);
// } else if (x <= y) {
//   x = y + x;
//   console.log(x);
// } else {
//   console.log("something strange just happend");
// }

// //9 switch
// let x = 3,
//   y = 2;
// console.log(y, " is: ");
// switch (y) {
//   case 0:
//     console.log("zero");
//     break;
//   case 1:
//     console.log("one");
//     break;
//   case 2:
//     console.log("two");
//     break;
//   case 3:
//     console.log("three");
//     break;
//   case 4:
//     console.log("four");
//     break;
//   default:
//     console.log("greaten then four");
//     break;
// }

// let x = 3,
//   y = 2;
// let operation = "M";
// console.log("Calculation result = ");
// switch (operation) {
//   case "A":
//     console.log(x + y);
//     break;
//   case "S":
//     console.log(x - y);
//     break;
//   case "M":
//     console.log(x * y);
//     break;
//   case "D":
//     console.log(x / y);
//     break;
// }

// // 10 for
// console.log("1...5");
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// console.log("1...5");
// console.log("continue on 2");
// for (let i = 0; i < 5; i++) {
//   if (i === 2) {
//     continue;
//   }
//   console.log(i);
// }

// console.log("1...5");
// console.log("break on 2");
// for (let i = 0; i < 5; i++) {
//   if (i === 2) {
//     break;
//   }
//   console.log(i);
// }

// let valueArray = [1, 4, 7, 2, 3];
// let sum = 0;
// // console.log("Sum of ", valueArray);
// for (let i = 0; i < valueArray.length; i++) {
//   sum = sum + valueArray[i];
//   console.log(sum);
// }
//console.log(sum);

//11 while
//console.log("1...5");
// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

// console.log("1...5");
// console.log("continue on 2");
// let i = 0;
// while (i < 5) {
//   if (i === 2) {
//     continue;
//   }
//   console.log(i);
//   i++;
// }
// console.log("done");

// console.log("1...5");
// console.log("continue on 2");
// i = 0;
// while (i < 5) {
//   if (i === 2) {
//     i++;
//     continue;
//   }
//   console.log(i);
//   i++;
// }
// console.log("done");

// console.log("1...5");
// console.log("break on 2");
// i = 0;
// while (i < 5) {
//   i++;
//   if (i === 2) {
//     break;
//   }
//   console.log(i);
// }

// let valueArray = [1, 4, 7, 2, 3, 0];
// let sum = 0;
// i = 0;
// console.log("Sum of ", valueArray);
// while (i < valueArray.length) {
//   sum = sum + valueArray[i];
//   i++;
// }
// console.log(sum);

// LEAP

// let years = [1974, 1900, 1985, 2000];
// let year;
// for(let i=0; i<years.length; i++){
//     year = years[i];

//     if((year%100===0 || year%4===0) && year%400!==0){
//         console.log(year);
//     }
// }

//FACTORIAL

// let n = 7;
// let summary = 1
// while( n > 0 ){
//     summary *= n--;
//     console.log(summary);
// }
// console.log(summary);

// let i=1;
// let result =1;
// while(i<=7){
//     result = result * i;
//     i++;
// }
// console.log(result);
