let input = require("fs").readFileSync("stdin", "utf8");

let lines = input.split("\n").map((number) => {
  return Number(number);
});

let positives = lines.filter((item) => {
  if (item > 0) {
    return item;
  }
});

let calcMedia = positives.reduce((acc, cur) => {
  return acc + cur;
});

let result = calcMedia / positives.length;

console.log(`${positives.length} valores positivos`);
console.log(result.toFixed(1));
