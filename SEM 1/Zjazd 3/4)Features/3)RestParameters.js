function ShowData(a, b, ...c) {
  console.log("main data");
  console.log(a);
  console.log("secondary data");
  console.log(b);
  console.log("extra data");
  console.log(c);
}

// ShowData(1,2,3,4,5,6);
// ShowData(1);
// ShowData(1,2);
ShowData(1, 2, 3, "four", "5", 6);
