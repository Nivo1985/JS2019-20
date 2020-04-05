const myRevealingModule = (function() {
  let privateVar = "Peter";
  const publicVar = "Hello World";

  function privateFunction() {
    console.log("Name: " + privateVar);
  }

  function publicSetName(name) {
    console.log("publicMethod start");
    privateVar = name;
    console.log("publicMethod end");
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
