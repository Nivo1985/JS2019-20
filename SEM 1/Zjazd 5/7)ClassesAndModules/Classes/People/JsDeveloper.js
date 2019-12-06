var Person = require("./Person");

class JsDeveloper extends Person {
  constructor(id, framework) {
    super(id);
    this.type = "JS Developer";
    this.framework = framework;
  }

  showInfo() {
    return super.showInfo() + ` and favourite frameworks is ${this.framework}`;
  }
}

module.exports = JsDeveloper;
