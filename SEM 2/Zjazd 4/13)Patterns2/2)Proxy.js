let GetValuePlus1 = arg1 => arg1 + 1;
let GetValueMinus1 = arg1 => arg1 - 1;

class Proxy {
  constructor(func1, func2) {
    this.cache = {};
    this.func1 = func1;
    this.func2 = func2;
  }
  getValue(arg1) {
    if (!this.cache[arg1]) {
      if (arg1 >= 0) {
        this.cache[arg1] = this.func1(arg1);
      } else if (arg1 < 0) {
        this.cache[arg1] = this.func2(arg1);
      }
    }
    return this.cache[arg1];
  }
}

var proxy = new Proxy(GetValuePlus1, GetValueMinus1);

console.log(proxy.getValue(1));
console.log(proxy.getValue(2));
console.log(proxy.getValue(-1));
console.log(proxy.getValue(1));
console.log(proxy.getValue("a"));
