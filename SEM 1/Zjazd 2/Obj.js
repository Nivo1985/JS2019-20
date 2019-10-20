//1 basics
// let book = {
//   title: "LOTR",
//   pages: 2745,
//   hardCover: true,
//   characters: ["Merry", "Pippin"]
// };

// console.log(book.title);
// console.log(book.pages);
// console.log(book.hardCover);
// book.characters.push("Sam");
// console.log(book.characters);

//1,5
// let book1 = {
//   title: "Karol"
// };
// let book2 = book1;
// let book3 = {
//   title: "Karol"
// };
// book1.title = "Adam";
// book2.title = "Rogowski";
// book1.rrr = 23;
// console.log(book1 == book2);
// console.log(book1 == book3);

//2 object + function
// let book = {
//   title: "LOTR",
//   pages: 2745,
//   hardCover: true
// };

// function showBookInfo(bookObject) {
//   console.log(bookObject.title);
//   console.log(bookObject.pages);
//   console.log(bookObject.hardCover);
// }

// showBookInfo(book);

// function changeCover(bookObject) {
//   bookObject.hardCover = !bookObject.hardCover;
//   console.log("Cover changed");
// }
// changeCover(book);
// showBookInfo(book);

//3 objects in array
function showBookInfo(book) {
  console.log(book.title);
  console.log(book.pages);
  console.log(book.hardCover);
}

let books = [
  {
    title: "LOTR",
    pages: 2745,
    hardCover: true
  },
  {
    title: "Witcher",
    pages: 1266,
    hardCover: false
  },
  {
    title: "Sherlock Holmes",
    pages: 1950,
    hardCover: true
  }
];
// for (let i = 0; i < books.length; i++) {
//   showBookInfo(books[i]);
// }

books.forEach(function(book, i, tab) {
  let j = 1;
});

//4 out of the box
// Math.max();
// Math.min();
// Math.floor();
// Math.pow();
// Math.PI;
// Math.SQRT2;
// Math.LOG10E;
// Math.E;

// let dateObj = new Date();
// console.log(dateObj);
// console.log(dateObj.toDateString());
// console.log(dateObj.toLocaleDateString());
// dateObj.setMonth(11);
// console.log(dateObj);
// dateObj.setMonth(12);
// console.log(dateObj);

// let str = "Karol";
// console.log(str.substr(2, 2));
// console.log(str.repeat(3));
// console.log(str.includes("o"));
// console.log(str.anchor("test"));
// console.log(str.length);

// let k = 2.12345;
// console.log(k.toExponential(3));
// console.log(k.toFixed(3));
// console.log(k.toPrecision(3));

// k = 4;
// console.log(Number.isInteger(k));
// console.log(Number.isNaN(k));
// console.log(Number.isSafeInteger(k));

// function randomIntFromInterval(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
