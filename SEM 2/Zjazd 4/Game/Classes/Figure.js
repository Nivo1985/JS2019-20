class Figure {
  constructor(id, sign, used = false) {
    this.id = id;
    this.sign = sign;
    this.used = used;
  }

  Reveal() {
    return this.sign;
  }

  Use() {
    this.used = true;
  }
}

module.exports = Figure;
