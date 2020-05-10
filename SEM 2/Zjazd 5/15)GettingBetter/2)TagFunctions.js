function tagFunctionStupid(strings, ...values) {
  return "tagFunctionStupid string";
}

function tagFunctionMimic(strings, ...values) {
  var result = "";

  for (var i = 0; i < strings.length; i++) {
    if (i > 0) result += values[i - 1];
    result += strings[i];
  }

  return result;
}

function tagFunctionAddType(strings, ...values) {
  var result = "";

  for (var i = 0; i < strings.length; i++) {
    if (i > 0) result += `${values[i - 1]}(${typeof values[i - 1]})`;
    result += strings[i];
  }

  return result;
}

var firstName = "Karol";
var lastName = "Rogowski";
var yearOfBirth = 1985;

var printMessage = `Hi ${firstName} ${lastName} born at ${yearOfBirth}.`;
printMessage = tagFunctionStupid`Hi ${firstName} ${lastName} born at ${yearOfBirth}.`;
console.log(printMessage);

printMessage = tagFunctionMimic`Hi ${firstName} ${lastName} born at ${yearOfBirth}.`;
console.log(printMessage);

printMessage = tagFunctionAddType`Hi ${firstName} ${lastName} born at ${yearOfBirth}.`;
console.log(printMessage);
