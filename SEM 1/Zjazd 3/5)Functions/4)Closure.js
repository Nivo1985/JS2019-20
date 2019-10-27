let iife = (function() {
  let var1 = "inner";
  let getValue = function() {
    return var1;
  };
  let setValue = function(newValue) {
    if (newValue) var1 = newValue;
  };
  return {
    getInnerData: getValue,
    setInnerData: setValue
  };
})();

console.log(iife);
console.log(iife.getInnerData());
iife.var1 = "KAROL";
iife.setInnerData(undefined);
console.log(iife.getInnerData());
