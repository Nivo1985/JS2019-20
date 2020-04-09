let Show1 = _ => console.log("Show 1");

let Show2 = x => console.log("Show 2. Arg " + x);

let Show3 = (x, y, z) => console.log("Show 3. Arg " + x + ", " + y + ", " + z);

class Subscriber {
  constructor() {
    this.observers = [];
  }

  subscribe(func) {
    this.observers.push(func);
  }
  unsubscribe(func) {
    this.observers = this.observers.filter(fn => fn !== func);
  }
  fire(...arg) {
    this.observers.forEach(fn => fn(...arg));
  }
}

let subscriber = new Subscriber();
subscriber.subscribe(Show1);
subscriber.subscribe(Show2);
subscriber.subscribe(Show2);
subscriber.subscribe(Show3);

subscriber.fire("a", "b", "c");

subscriber.unsubscribe(Show2);
subscriber.fire("a", "b", "c");
