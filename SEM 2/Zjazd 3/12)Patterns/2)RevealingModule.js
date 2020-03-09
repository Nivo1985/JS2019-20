let myVar = 1;

const myRevealingModule = (function() {
  let privateVar = "Peter";
  const publicVar = "Hello World";

  function privateFunction() {
    console.log("Name: " + privateVar);
  }

  function publicSetName(name) {
    privateVar = name;
  }

  function publicGetName() {
    privateFunction();
  }

  return {
    setName: publicSetName,
    greeting: publicVar,
    getName: publicGetName
  };
})();

console.log(myRevealingModule);

myRevealingModule.setName("Mark");
myRevealingModule.getName();
