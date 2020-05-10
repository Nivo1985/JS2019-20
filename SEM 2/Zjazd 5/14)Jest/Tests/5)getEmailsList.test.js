const getEmailsList = require("../Utilities/5)getEmailsList");

test("to be an email", () => {
  getEmailsList().forEach(email =>
    expect(email).toMatch(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  );
});

test("to contain karol.rogowski@gmail.com", () => {
  expect(getEmailsList()).toContain("karol.rogowski@gmail.com");
});

test("not to be from spam", () => {
  getEmailsList().forEach(email => expect(email).not.toMatch(/@spam/));
});
