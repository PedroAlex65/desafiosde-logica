var input = require("fs").readFileSync("stdin", "utf8");

var lines = input
  .trim()
  .split("\n")
  .map((number) => {
    return Number(number).toFixed(1);
  })
  .filter((item) => {
    return item % 2 === 0;
  });

console.log(`${lines.length} valores pares`);
