const separator = "cat!";
const numberSeparator = ";";

function encode(strs) {
  if(!strs.length) return "";

  let result = "";

  strs.forEach(str => {
    result += str.length + numberSeparator;
  });

  result += separator;

  return result + strs.join("");
}

function descode(str) {
  const index = str.indexOf(separator);
  const beforeSeparator = str.slice(0, index);
  const afterSeparator = str.slice(index + separator.length);
  const words = [];
  let indexCount = 0;

  const wordsCount = beforeSeparator.split(numberSeparator);

  for(let i = 0; i < wordsCount.length; i++) {
    if (!wordsCount[i]) continue;
    const lettersCount = Number(wordsCount[i]);
    const word = afterSeparator.slice(indexCount, indexCount + lettersCount);
    words.push(word);
    indexCount += lettersCount;
  }

  return words;
}

const toEncode = ["3;cat!","cat!",";","1;","","4;","cat!;","lint","code","cat!","love","you"];
const toEncode1 = ["we", "say", ":", "yes"];

const encoded = encode(toEncode);
const encoded1 = encode(toEncode1);

console.log(encoded);
console.log(encoded1);

const decoded = descode(encoded);
const decoded1 = descode(encoded1);

console.log(decoded);
console.log(decoded1);