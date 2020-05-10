function getEmailsList() {
  return ["karrog@op.pl", "karol.rogowski@gmail.com", "zddsaa@spam.xxx"].filter(
    email => !email.match(/@spam/)
  );
}

module.exports = getEmailsList;
