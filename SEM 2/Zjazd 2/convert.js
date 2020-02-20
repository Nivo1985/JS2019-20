const morseCodeMap = {
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-",
  " ": " "
};

var ulits = (function() {
  function swap(json) {
    var ret = {};
    for (var key in json) {
      ret[json[key]] = key;
    }
    return ret;
  }

  return {
    swap
  };
})();

class UnitConverter {
  constructor(convertCodeMap, reverseConvertCodeMap) {
    this.convertCodeMap = convertCodeMap;
    this.reverseConvertCodeMap = reverseConvertCodeMap;
  }

  Convert(char) {
    return this.convertCodeMap[char];
  }

  Unconvert(char) {
    return this.reverseConvertCodeMap[char];
  }
}

class SetsConverter {
  constructor(convert, unconvert) {
    this.convert = convert;
    this.unconvert = unconvert;
  }

  ConvertString(text) {
    return text
      .toLowerCase()
      .split("")
      .map(this.convert);
  }

  UnconvertArray(array) {
    return array.map(this.unconvert).join("");
  }
}

let unitConverter = new UnitConverter(morseCodeMap, ulits.swap(morseCodeMap));

let setsConverter = new SetsConverter(
  unitConverter.Convert.bind(unitConverter),
  unitConverter.Unconvert.bind(unitConverter)
);

let convertionResult = setsConverter.ConvertString("Karol");
console.log(convertionResult);
let unconversionResult = setsConverter.UnconvertArray(convertionResult);
console.log(unconversionResult);
