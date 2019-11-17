function DetailsOfPayent(f, g, h) {
  (this.Type = 3), //f
    (this.company = "ECSTASIA"), //g
    (this.date = "09-07-2014"); //h
}

function MainEntry(a, s, d, f, g, h) {
  (this.index = 0), //a
    (this._id = "5c01097e566bb68fe9611b25"), //s
    (this.cost = 434.25), //d
    (this.detailsOfPayent = new DetailsOfPayent(f, g, h));
}
