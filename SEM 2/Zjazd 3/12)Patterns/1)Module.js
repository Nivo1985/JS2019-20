const myModule = (function() {
  const privateVariable = "Hello World";

  function privateMethod() {
    console.log(privateVariable);
  }
  return {
    publicMethod: function() {
      console.log("publicMethod start");
      privateMethod();
      console.log("publicMethod end");
    }
  };
})();

console.log(myModule);

myModule.publicMethod();
