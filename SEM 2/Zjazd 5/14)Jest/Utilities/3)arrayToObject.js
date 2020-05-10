function arrayToObject(...args) {
  let result = {};
  for (let arr of args.reverse()) {
    result[arr[0]] = arr[1];
  }
  return result;
}

module.exports = arrayToObject;
